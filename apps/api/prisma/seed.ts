import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'test@devcollab.dev' },
    update: {},
    create: {
      email: 'test@devcollab.dev',
      name: 'Test User',
      githubUsername: 'testuser',
    },
  })

  const workspace = await prisma.workspace.upsert({
    where: { slug: 'test-workspace' },
    update: {},
    create: {
      name: 'Test Workspace',
      slug: 'test-workspace',
      plan: 'FREE',
      ownerId: user.id,
      members: {
        create: { userId: user.id, role: 'OWNER' }
      }
    },
  })

  console.log('Seeded:', { user, workspace })
}

main().catch(console.error).finally(() => prisma.$disconnect())
