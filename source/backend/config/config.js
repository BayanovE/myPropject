const dotenv = require('dotenv')
const parseDbUrl = require('parse-database-url')
dotenv.config()

const env = process.env

const pgUrl = env.DATABASE_URL

let pgUser, pgPass, pgHost, pgDBName
if (pgUrl) {
  const pgParsedUrl = parseDbUrl(pgUrl)
  pgUser = pgParsedUrl.user
  pgPass = pgParsedUrl.password
  pgHost = pgParsedUrl.host
  pgDBName = pgParsedUrl.database
} else {
  pgUser = env.PG_USER || env.USER
  pgPass = env.PG_PASS
  pgHost = env.PG_HOST || 'localhost'
  pgDBName = env.PG_DBNAME || 'pik'
}

module.exports = {
  development: {
    username: pgUser,
    password: pgPass,
    database: pgDBName,
    host: pgHost,
    dialect: 'postgres',
    pool: {
      max: 25
    }
  },
  test: {
    username: pgUser,
    password: pgPass,
    database: `${pgDBName}_test`,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25
    }
  },
  production: {
    username: pgUser,
    password: pgPass,
    database: pgDBName,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25
    }
  },
  staging: {
    username: pgUser,
    password: pgPass,
    database: pgDBName,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25
    }
  }
}
