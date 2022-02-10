const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');
const sequelize = new Sequelize(dbConfig.HOST, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);
module.exports = db;