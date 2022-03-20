const { User } = require("../models");

const userController = {
  getUsers: (req, res) => {
    User.find({}).then((data) => {
      res.json(data);
    });
  },
  getUser: (req, res) => {
    User.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  addUser: (req, res) => {
    User.create(req.body).then((data) => {
      res.json(data);
    });
  },
};

module.exports = userController;