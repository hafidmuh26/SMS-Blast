const connection = require("../config/configDB");
const { Sequelize } = require("Sequelize");

const sequelize = new Sequelize(
  connection.database,
  connection.user,
  connection.password,
  {
    host: connection.server,
    port: connection.port,
    dialect: connection.dialect,
    operatorsAliases: 0,
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
    pool: connection.pool,
  }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.smsBlasts = require("./smsBlastModels")(sequelize, Sequelize);

module.exports = db;
