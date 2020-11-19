const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    age: { type: Number, min: 16 }, 
    name: { type: String },
    email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true, unique: true },
    password: { type: String, minlength: 2, required: true }, //change to 6 at the end
    profilepic: { type: String, default: '/images/icon-userdefault.png' }, //remember to change default
   
    favorsAsked: [{ type: Schema.Types.ObjectId, ref: 'Favor' }], //my favors created by me
    favorsProvided: [{ type: Schema.Types.ObjectId, ref: 'Favor' }], //other favors

    fRecived: Number,
    fRecivedScore: Number,
    fGived: Number,
    fGivedScore: Number
})

const User = mongoose.model('User', userSchema);
module.exports = User;
