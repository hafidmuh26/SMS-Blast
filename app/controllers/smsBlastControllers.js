const db = require("../models/index");
const SmsBlast = db.smsBlasts;
const Op = db.Sequelize.Op;


//CREATE SMS BLAST
exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const smsBlast = {
    username: req.body.username,
    password: req.body.password,
    sender: req.body.sender,
    msisdn: req.body.msisdn,
    message: req.body.message,
    campaign: req.body.campaign,
    istatus: req.body.istatus
  };

  SmsBlast.create(smsBlast)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Sms Blast."
      });
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