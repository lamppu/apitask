// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config({path: './.env'});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PWD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },

};
