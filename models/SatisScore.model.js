const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const satisfactionScoreSchema = new Schema({
    favorId: [{ type: Schema.Types.ObjectId, ref: 'Trade' }],
    AskerToProviderScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    AskerToProviderComment: { type: String, enum: [1, 2, 3, 4, 5], required: true},
    ProviderToAskerScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    ProviderToAskerComment: { type: String, enum: [1, 2, 3, 4, 5], required: true}
})

const SatiScore = mongoose.model('SatiScore', satisfactionScoreSchema);
module.exports = SatiScore;
