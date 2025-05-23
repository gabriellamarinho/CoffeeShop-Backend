const sequelize =require('sequelize');

const sequelize = new sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
    }
);

module.exports = sequelize;