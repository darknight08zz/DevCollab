const required = [
  'DATABASE_URL',
  'DIRECT_URL',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'REDIS_URL',
  'JWT_SECRET',
  'GITHUB_CLIENT_ID',
  'GITHUB_CLIENT_SECRET',
  'OPENAI_API_KEY',
  'LEMON_SQUEEZY_API_KEY',
  'LEMON_SQUEEZY_STORE_ID',
  'LEMON_SQUEEZY_WEBHOOK_SECRET',
  'LEMON_SQUEEZY_PRO_VARIANT_ID',
  'LEMON_SQUEEZY_TEAM_VARIANT_ID',
  'CLIENT_URL',
]

export function checkEnv() {
  const missing = required.filter(key => !process.env[key])
  if (missing.length > 0) {
    console.error('Missing required environment variables:')
    missing.forEach(key => console.error(` - ${key}`))
    process.exit(1)
  }
  console.log('Environment check passed.')
}
