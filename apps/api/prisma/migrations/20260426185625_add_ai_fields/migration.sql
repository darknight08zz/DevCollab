-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "category" TEXT,
ADD COLUMN     "isAI" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "severity" TEXT,
ADD COLUMN     "suggestedFix" TEXT;

-- AlterTable
ALTER TABLE "PullRequest" ADD COLUMN     "aiSummary" TEXT;
