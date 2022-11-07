require('dotenv').config();

const options = {
  host: process.env.MYSQL_HOST,
  port: process.env.DB_PORT,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: options,
  test: options,
  production: options,
};
