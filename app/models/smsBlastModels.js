module.exports = (sequelize, Sequelize) => {
  const smsBlast = sequelize.define("sms_center", {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    sender: {
      type: Sequelize.STRING,
    },
    msisdn: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    },
    istatus: {
      type: Sequelize.STRING
    },
    campaign: {
      type: Sequelize.STRING
    },
    is_OTP: {
      type: Sequelize.INTEGER
    }
  },
  {freezeTableName: true,
  timestamps : false}
  );

  return smsBlast;
};