const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
  askerUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  providerUserId: [{ type: Schema.Types.ObjectId, ref: 'User' , default: null}],
  title: { type: String, maxlength: 50},
  date: { type:Date, required: true},
  timeStart:  { type:Date, required: true },
  timeEnd:  { type:Date, required: true },
  location: { type:String, required: true },   //check what we need from mapbox
  description: { type:Date, required: false },
  tags: [String],
  comments: [{user: Id, comment: String}], 
  status: { type: String, enum: [ "Request to do favor pending", "Accept and reserve favor", "Finished"]},
  timestamps: {createdAt: 'create_at', updatedAt: 'updated_at' },
  satisfactionScore: { type: Schema.Types.ObjectId, ref: 'SatiScore' },
  location: { 
    type: { type: String }, 
    coordinates: [Number]
  }
})

favorSchema.index({ location: '2dsphere' });
const Favor = mongoose.model('Favor', favorSchema);
module.exports = Favor;