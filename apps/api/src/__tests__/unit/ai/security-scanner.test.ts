import { describe, it, expect } from 'vitest';
import { preScanDiff, calculateSecurityScore } from '../../../ai/security-scanner';

describe('Security Scanner Unit Tests', () => {
  it('should detect AWS Access Keys in diff', () => {
    const diff = [
      {
        filePath: 'config.ts',
        chunks: [{
          changes: [
            { type: 'add', content: 'const awsKey = "AKIA1234567890ABCDEF";', ln: 5 }
          ]
        }]
      }
    ];

    const issues = preScanDiff(diff);
    expect(issues).toHaveLength(1);
    expect(issues[0].category).toBe('hardcoded-secret');
    expect(issues[0].description).toContain('AWS Access Key');
  });

  it('should detect eval() usage', () => {
    const diff = [
      {
        filePath: 'app.js',
        chunks: [{
          changes: [
            { type: 'add', content: 'eval(userInput);', ln: 12 }
          ]
        }]
      }
    ];

    const issues = preScanDiff(diff);
    expect(issues).toHaveLength(1);
    expect(issues[0].category).toBe('injection');
    expect(issues[0].description).toContain('eval()');
  });

  it('should detect innerHTML usage', () => {
    const diff = [
      {
        filePath: 'ui.js',
        chunks: [{
          changes: [
            { type: 'add', content: 'div.innerHTML = "<img src=x onerror=alert(1)>";', ln: 20 }
          ]
        }]
      }
    ];

    const issues = preScanDiff(diff);
    expect(issues).toHaveLength(1);
    expect(issues[0].category).toBe('xss');
  });

  it('should correctly calculate security score', () => {
    const issues: any[] = [
      { severity: 'critical' }, // -25
      { severity: 'high' },     // -15
      { severity: 'medium' }    // -5
    ];
    
    const score = calculateSecurityScore(issues);
    expect(score).toBe(55); // 100 - 25 - 15 - 5 = 55
  });

  it('should not go below 0 for security score', () => {
    const issues: any[] = Array(10).fill({ severity: 'critical' });
    const score = calculateSecurityScore(issues);
    expect(score).toBe(0);
  });
});
