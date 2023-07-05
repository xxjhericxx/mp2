const dbConfig = require('../config/config');

// connect
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: {
    max: dbConfig.POOL.MAX,
    min: dbConfig.POOL.MIN,
    acquire: dbConfig.POOL.ACQUIRE,
    idle: dbConfig.POOL.IDLE
  }
});

// db export
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// import models
db.tasks = require('./task.model')(sequelize, Sequelize);

module.exports = db;