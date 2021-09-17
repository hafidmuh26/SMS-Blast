const { Sequelize } = require("Sequelize");
require("dotenv").config({path:'../../.env'});


const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT,
    dialect: "mssql",
    operatorsAliases: 0,
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
);

sequelize.authenticate().then(v => console.log('success')).catch(v=> console.log(v))


const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.smsBlasts = require('../models/smsBlastModels')(sequelize, Sequelize);

// module.exports = db;



