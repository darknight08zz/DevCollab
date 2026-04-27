-- AlterTable
ALTER TABLE "PullRequest" ADD COLUMN     "securityScore" INTEGER DEFAULT 100;

-- CreateTable
CREATE TABLE "SecurityFinding" (
    "id" TEXT NOT NULL,
    "pullRequestId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "lineNumber" INTEGER NOT NULL,
    "severity" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cweId" TEXT,
    "description" TEXT NOT NULL,
    "remediation" TEXT NOT NULL,
    "isFalsePositive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityFinding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SecurityFinding_pullRequestId_idx" ON "SecurityFinding"("pullRequestId");

-- AddForeignKey
ALTER TABLE "SecurityFinding" ADD CONSTRAINT "SecurityFinding_pullRequestId_fkey" FOREIGN KEY ("pullRequestId") REFERENCES "PullRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
