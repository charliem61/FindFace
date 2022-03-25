// the same as user except for reaction because it  is a sub doc.
//in class code in mini projects

const { Schema, model } = require("mongoose")
const  dateFormat = require("../utils/dateFormat")
const reactionSchema = require("./reaction")

const thoughtSchema = new Schema({
    thoughtText: {
          type: String,
          required: true,
          min:1,
          max:260,
    },
    createdAt: {
          type: Date,
          default: new Date,
          get: timestamp => dateFormat(timestamp),
    },
    username: {
          type: String,
          required: true,
    },
    reactions: [reactionSchema],
});

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;