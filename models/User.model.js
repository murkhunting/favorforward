const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  age: { type: Number, default: 16 }, 
  name: { type: String },
  email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true, unique: true },
  password: { type: String, minlength: 2, required: true }, //change to 6 at the end
  profilepic: { type: String, default: '/images/icon-userdefault.png' }, //remember to change default
  favorCount: { type: Number, default: 1},

  favorsCreated: [{ type: Schema.Types.ObjectId, ref: "Favor" }],
  favorsProvided: [{ type: Schema.Types.ObjectId, ref: "Favor" }],

  // fRecived: Number, //to the creator
  // fRecivedScore: Number,
  // fGived: Number, //from the creator
  // fGivedScore: Number
});

const User = mongoose.model("User", userSchema);
module.exports = User;

