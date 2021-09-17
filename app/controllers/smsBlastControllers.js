const { query } = require("express");
const db = require("../config/configDB");
const SmsBlast = db.sequelize;
const Op = db.Sequelize.Op;


//CREATE SMS BLAST
exports.create = (req, res) => {
  
  SmsBlast.query('exec ins_sms_center :username, :password, :sender, :msisdn, :message, :istatus, :campaign, :is_OTP',
                  {replacements: {
                    username: 'brilife',
                    password: 'brilife2016',
                    sender: 'BRILife',
                    msisdn: req.body.msisdn,
                    message: req.body.message,
                    istatus: req.body.istatus,
                    campaign: req.body.campaign,
                    is_OTP: 0
                  }
                }).then(data => {
                  res.status(200).send({status: 'Request is being processed', data});
                }).catch(err => {
                  res.status(500).send({
                    message: err
                  })
                });
};


//FINDALL SMS BLAST
exports.findAll = async (req, res) => {
  SmsBlast.findAll({ where: { id: "11634014" }
  
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sms Blast."
      });
    });
};

// Find By Id SMS Blast
exports.findById = (req, res) => {
  const id = req.params.id;

  SmsBlast.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SMS Blast with id=" + id
      });
    });
};

// Update SMS Blast
exports.update = (req, res) => {
  const id = req.params.id;

  SmsBlast.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {;
        res.send({
          message: "SMS Blast was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SMS Blast with id=${id}. Maybe SMS Blast was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SMS Blast with id=" + id
      });
    });
};

// Delete SMS Blast By Id
exports.delete = (req, res) => {
  const id = req.params.id;

  SmsBlast.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        console.log(num);
        res.send({
          message: "SMS Blast was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SMS Blast with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SMS Blast with id=" + id
      });
    });
};