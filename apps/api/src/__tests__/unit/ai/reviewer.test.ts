import { describe, it, expect, vi, beforeEach } from 'vitest';
import { analyzeDiff, generatePRSummary } from '../../../ai/reviewer';
import OpenAI from 'openai';

// Mock OpenAI
vi.mock('openai', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: vi.fn()
        }
      }
    }))
  };
});

describe('AI Reviewer Unit Tests', () => {
  let mockOpenAI: any;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.OPENAI_API_KEY = 'test-key';
    mockOpenAI = new OpenAI();
  });

  it('should parse AI comments correctly from OpenAI response', async () => {
    const mockComments = [
      {
        filePath: 'src/index.ts',
        lineNumber: 10,
        severity: 'error',
        category: 'security',
        message: 'SQL Injection vulnerability detected.',
        suggestedFix: 'Use parameterized queries.'
      }
    ];

    // Access the mocked chat.completions.create
    const mockCreate = vi.mocked(mockOpenAI.chat.completions.create);
    mockCreate.mockResolvedValue({
      choices: [{ message: { content: JSON.stringify({ comments: mockComments }) } }]
    } as any);

    const result = await analyzeDiff([{ file: 'test', chunks: [] }]);

    expect(result).toHaveLength(1);
    expect(result[0].message).toContain('SQL Injection');
    expect(result[0].filePath).toBe('src/index.ts');
  });

  it('should generate a PR summary', async () => {
    const mockSummary = 'This PR adds a login feature and updates the UI.';
    const mockCreate = vi.mocked(mockOpenAI.chat.completions.create);
    mockCreate.mockResolvedValue({
      choices: [{ message: { content: mockSummary } }]
    } as any);

    const summary = await generatePRSummary({ title: 'Add Login', body: 'Descr', diff: [] });

    expect(summary).toBe(mockSummary);
  });

  it('should throw error if API key is missing', async () => {
    process.env.OPENAI_API_KEY = 'MISSING_API_KEY';
    await expect(analyzeDiff([])).rejects.toThrow('OPENAI_API_KEY is not set');
  });
});
