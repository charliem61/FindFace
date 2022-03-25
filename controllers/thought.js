const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts: (req, res) => {
    Thought.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
  getThought: (req, res) => {
    Thought.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
  postThought: (req, res) => {
    Thought.create(req.body)
    .then((dbThought)=> {
      return User.findOneAndUpdate(
        {_id:req.body.userId},
        {$addToSet:{thoughts:dbThought._id}},
        {new:true}
      )
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  updateThought: (req, res) => {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
  deleteThought: (req, res) => {
    Thought.findByIdAndDelete(req.params.id, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
  createReaction: (req, res) => {
    Thought.findOneAndUpdate(
      req.params.id,
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
  deleteReaction: (req, res) => {
    Thought.findOneAndUpdate(
      req.params.id,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(error);
        res.json(error);
      });
  },
};

module.exports = thoughtController;
