const { Schema, model } = require("mongoose");
const  dateFormat = require("../utils/dateFormat")


const userSchema = new Schema({
          reactionId: {
          type: Schema.Types.ObjectId,
          default: ()=> new Types.ObjectId(),
          },

          reactionBody: {
          type: String,
          required: true,
          },

          username: {
          type: String,
          required: true,
          },

          createdAt: {
          type: Date,
          default: new Date,
          get: timestamp => dateFormat(timestamp),
          },
});

module.exports = userSchema;

