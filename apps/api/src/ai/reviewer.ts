import OpenAI from 'openai';
import { API_ENDPOINTS } from '@devcollab/shared';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'MISSING_API_KEY',
});

const checkApiKey = () => {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'MISSING_API_KEY') {
    throw new Error('OPENAI_API_KEY is not set in environment variables. Please add it to your .env file.');
  }
};

export interface AIComment {
  filePath: string;
  lineNumber: number;
  severity: 'error' | 'warning' | 'suggestion';
  message: string;
  category: 'security' | 'performance' | 'style' | 'logic' | 'documentation';
  suggestedFix?: string;
}

export const analyzeDiff = async (diff: any[]): Promise<AIComment[]> => {
  checkApiKey();
  const diffString = JSON.stringify(diff, null, 2);
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are a senior full-stack engineer and security expert. 
        Analyze the following code diff and provide a list of high-quality review comments.
        
        Focus on:
        1. Critical bugs and logical errors.
        2. Security vulnerabilities (SQL injection, XSS, insecure defaults).
        3. Performance bottlenecks.
        4. Major architectural issues.
        
        Ignore:
        1. Trivial style nits (tabs vs spaces, semicolons) unless they violate fundamental readability.
        2. Documentation unless it's dangerously misleading.
        
        Return your analysis as a JSON array of objects with this structure:
        { "filePath": string, "lineNumber": number, "severity": "error"|"warning"|"suggestion", "category": "security"|"performance"|"style"|"logic"|"documentation", "message": string, "suggestedFix": string }`
      },
      {
        role: 'user',
        content: `Analyze this diff:\n${diffString.slice(0, 30000)}` // Limit context for token safety
      }
    ],
    response_format: { type: 'json_object' }
  });

  const content = response.choices[0].message.content;
  if (!content) return [];
  
  const parsed = JSON.parse(content);
  return parsed.comments || parsed.analysis || [];
};

export const generatePRSummary = async (pr: { title: string, body?: string, diff: any[] }): Promise<string> => {
  checkApiKey();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful engineering manager. Summarize the following pull request in 3-5 concise, human-readable sentences focusing on the "what" and "why".'
      },
      {
        role: 'user',
        content: `PR Title: ${pr.title}\nPR Body: ${pr.body || 'No description'}\n\nDiff Content (partial):\n${JSON.stringify(pr.diff).slice(0, 15000)}`
      }
    ]
  });

  return response.choices[0].message.content || 'Failed to generate summary.';
};

export const suggestFix = async (comment: string, codeContext: string): Promise<string> => {
  checkApiKey();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are an expert coder. Given a code review comment and the surrounding context, provide a concrete code fix in a markdown code block.'
      },
      {
        role: 'user',
        content: `Issue: ${comment}\n\nContext:\n${codeContext}`
      }
    ]
  });

  return response.choices[0].message.content || 'No fix suggested.';
};
