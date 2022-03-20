const { User } = require("../models");

const userController = {
  getUsers: (req, res) => {
    User.find({}).then((data) => {
      res.json(data);
    });
  },
  getUser: (req, res) => {
    User.findById(req.params.id).populate("thoughts").populate("friends").then((data) => {
      res.json(data);
    });
  },
  addUser: (req, res) => {
    User.create(req.body).then((data) => {
      res.json(data);
    });
  },
  updateUser: (req, res) => {
          User.findByIdAndUpdate(req.params.id,req.body,{new: true})
          .then((data) => {
                    res.json(data);
          }).catch((err)=>{
                    console.log(error)
                    res.json(error)
          })
},
deleteUser: (req, res) => {
          User.findByIdAndDelete(req.params.id,{new: true})
          .then((data) => {
                    res.json(data);
          }).catch((err)=>{
                    console.log(error)
                    res.json(error)
          })
  }
};

module.exports = userController;