import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'MISSING_API_KEY',
});

const checkApiKey = () => {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'MISSING_API_KEY') {
    throw new Error('OPENAI_API_KEY is not set. Please add it to your .env file.');
  }
};

export interface SecurityIssue {
  filePath: string;
  lineNumber: number;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  cweId?: string;
  description: string;
  remediation: string;
}

// Regex patterns for secrets and dangerous functions
const SECRET_PATTERNS = [
  { name: 'AWS Access Key', regex: /AKIA[0-9A-Z]{16}/g },
  { name: 'AWS Secret Key', regex: /"?[0-9a-zA-Z/+]{40}"?/g }, // Use with caution, can have false positives
  { name: 'GitHub Token', regex: /gh[p|o|u|s|r]_[a-zA-Z0-9]{36}/g },
  { name: 'Generic Secret', regex: /(key|secret|password|token|auth|access_token|api_key)\s*[:=]\s*["'][^"']{8,}["']/gi },
  { name: 'Private Key', regex: /-----BEGIN (RSA|OPENSSH|EC|PGP) PRIVATE KEY-----/g },
];

const DANGEROUS_FUNCTIONS = [
  { name: 'eval()', regex: /eval\s*\(/g, category: 'injection' },
  { name: 'innerHTML', regex: /\.innerHTML\s*=/g, category: 'xss' },
  { name: 'child_process.exec', regex: /exec\s*\(/g, category: 'command-injection' },
  { name: 'dangerous deserialization', regex: /JSON\.parse\s*\(\s*req\.body/g, category: 'deserialization' },
];

export const preScanDiff = (diff: any[]): SecurityIssue[] => {
  const issues: SecurityIssue[] = [];

  diff.forEach((file) => {
    file.chunks.forEach((chunk: any) => {
      chunk.changes.forEach((change: any) => {
        if (change.type !== 'add') return;
        
        const content = change.content;
        const lineNumber = change.ln || change.ln2;

        // Check for secrets
        SECRET_PATTERNS.forEach((pattern) => {
          if (pattern.regex.test(content)) {
            issues.push({
              filePath: file.filePath,
              lineNumber,
              severity: 'critical',
              category: 'hardcoded-secret',
              description: `Hardcoded ${pattern.name} detected.`,
              remediation: 'Use environment variables or a secrets manager. Rotate this key immediately.'
            });
          }
          pattern.regex.lastIndex = 0; // Reset regex state
        });

        // Check for dangerous functions
        DANGEROUS_FUNCTIONS.forEach((func) => {
          if (func.regex.test(content)) {
            issues.push({
              filePath: file.filePath,
              lineNumber,
              severity: 'high',
              category: func.category,
              description: `Use of dangerous function ${func.name} detected.`,
              remediation: `Find a safer alternative (e.g., use textContent instead of innerHTML, or avoid eval entirely).`
            });
          }
          func.regex.lastIndex = 0;
        });
      });
    });
  });

  return issues;
};

export const scanForVulnerabilities = async (diff: any[]): Promise<SecurityIssue[]> => {
  checkApiKey();
  const diffString = JSON.stringify(diff, null, 2);

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are a world-class senior security engineer and penetration tester. 
        Analyze the following code diff for security vulnerabilities.
        
        Detection categories: SQL injection, XSS, hardcoded secrets/API keys, insecure dependencies, SSRF, path traversal, authentication bypasses, unsafe deserialization, insecure cryptographic practices, and IDOR.
        
        Return a JSON array of objects with these properties:
        { "filePath": string, "lineNumber": number, "severity": "critical"|"high"|"medium"|"low", "category": string, "cweId": string, "description": string, "remediation": string }
        
        Be precise. Avoid false positives. Focus on exploitable issues.`
      },
      {
        role: 'user',
        content: `Scan this diff:\n${diffString.slice(0, 15000)}`
      }
    ],
    response_format: { type: 'json_object' }
  });

  const result = JSON.parse(response.choices[0].message.content || '{ "issues": [] }');
  return result.issues || result.vulnerabilities || [];
};

export const calculateSecurityScore = (issues: SecurityIssue[]): number => {
  let score = 100;
  issues.forEach((issue) => {
    if (issue.severity === 'critical') score -= 25;
    if (issue.severity === 'high') score -= 15;
    if (issue.severity === 'medium') score -= 5;
    if (issue.severity === 'low') score -= 2;
  });
  return Math.max(0, score);
};
