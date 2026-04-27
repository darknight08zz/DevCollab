import { beforeAll, afterAll, vi } from 'vitest';
import dotenv from 'dotenv';
import path from 'path';

// Load test environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env.test') });

beforeAll(() => {
  // Global mocks
  vi.mock('../lib/notifications', () => ({
    NotificationService: {
      notify: vi.fn(),
      notifyWorkspace: vi.fn(),
      notifySlack: vi.fn(),
    }
  }));
});

afterAll(() => {
  vi.clearAllMocks();
});
