const dotenv = require('dotenv')
const parseDbUrl = require('parse-database-url')
const Sequelize = require('sequelize')
dotenv.config()
const Op = Sequelize.Op;

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
      max: 25,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
    operatorsAliases: { $and: Op.and } 
  },
  test: {
    username: pgUser,
    password: pgPass,
    database: `${pgDBName}_test`,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
    operatorsAliases: { $and: Op.and } 
  },
  production: {
    username: pgUser,
    password: pgPass,
    database: pgDBName,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
    operatorsAliases: { $and: Op.and } 
  },
  staging: {
    username: pgUser,
    password: pgPass,
    database: pgDBName,
    host: pgHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 25,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
    operatorsAliases: { $and: Op.and } 
  }
}
