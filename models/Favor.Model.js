const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
  askerUserId: { type: Schema.Types.ObjectId, ref: 'User' }, //person who create it
  providerUserId: [{ type: Schema.Types.ObjectId, ref: 'User' , default: null}],
  title: { type: String, maxlength: 50},
  date: { type:Date, required: true},
  timeStart:  { type:Date, required: true },
  timeEnd:  { type:Date, required: true },
  description: { type:Date, required: false },
  tags: [String],
  comments: [{user: { type: Schema.Types.ObjectId, ref: 'User' }, comment: String}], 
  status: { type: String, enum: [ "Request to do favor pending", "Accept and reserve favor", "Finished"]},
  satisfactionScore: {
    AskerToProviderScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    AskerToProviderComment: { type: String, required: true},
    ProviderToAskerScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    ProviderToAskerComment: { type: String, required: true}
   },
  location: { 
    type: { type: String }, 
    coordinates: [Number]
  }

},
{timestamps: {createdAt: 'create_at', updatedAt: 'updated_at' }}
)

favorSchema.index({ location: '2dsphere' });
const Favor = mongoose.model('Favor', favorSchema);
module.exports = Favor;