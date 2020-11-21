const mongoose = require('mongoose');
const Schema = mongoose.Schema;

today = () => new Date(+new Date() + 7*24*60*60*1000)

const favorSchema = new Schema({
    createrUserId: { type: Schema.Types.ObjectId, ref: 'User' , default: null}, //person who creates it
    providerUserId: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, maxlength: 50, required: true},
    date: { type: Date,  required: true},
    timeStart:  { type: String, required: true },
    timeDuration:  { type: String, required: true },
    description: { type:String, required: false },
    tags: { type:String, default: ""},   //CL- make a function that takes the string and converts to arr of words
    comments: [{user: { type: Schema.Types.ObjectId, ref: 'User' }, comment: String}], 
    status: { type: String, enum: [ "Favor Created", "Favor Accepted", "Favor Finished"], default: "Favor Created"},
    satisScore: {
        createrToProviderScore: { type: Number, enum: [1, 2, 3, 4, 5] }, //, required: true},
        createrToProviderComment: { type: String }, //, required: true},
        ProviderToCreaterScore: { type: Number, enum: [1, 2, 3, 4, 5] }, //, required: true},
        ProviderToCreaterComment: { type: String } //, required: true},
    },
    location: { type: { type: String }, coordinates: [Number] }
},
{ 
    timestamps: {createdAt: 'create_at', updatedAt: 'updated_at' }
}
)

favorSchema.index({ location: '2dsphere' });
const Favor = mongoose.model('Favor', favorSchema);
module.exports = Favor;