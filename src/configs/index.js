const configs = {
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/example?schema=public',
  port: process.env.PORT || 80,
}

module.exports = configs