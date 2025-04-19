// config/database.js
import { Sequelize } from 'sequelize';
import config from './config.json';

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: false, // Opcional: desativa logs do Sequelize
});

export default sequelize;