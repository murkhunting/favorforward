const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
    createrUser: { type: Schema.Types.ObjectId, ref: 'User' , default: null}, //person who creates it
    providerUser: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    title: { type: String, maxlength: 50, required: true},
    date: { type: Date,  required: true},
    timeStart:  { type: String, required: true },
    timeDuration:  { type: String, required: true },
    description: { type:String, required: true },
    tags: { type:String, default: ""},   //CL- make a function that takes the string and converts to arr of words
    comments: [{user: { type: Schema.Types.ObjectId, ref: 'User' }, comment: String}], 
    status: { type: String, enum: [ "Favor Created", "Favor Accepted", "Favor Finished"], default: "Favor Created"},
    satisScore: {
        createrToProviderScore: { type: Number, enum: [1, 2, 3, 4, 5] }, //, required: true},
        createrToProviderComment: { type: String }, //, required: true},
        ProviderToCreaterScore: { type: Number, enum: [1, 2, 3, 4, 5] }, //, required: true},
        ProviderToCreaterComment: { type: String } //, required: true},
    },
    address: { type:String },
    zipcode: { type:String },
    location: { type: { type: String, default: "Point"}, coordinates: {type:Array, default:[41.3869474,2.1695633]}}
    // geometry: { type: {type:String, default:"Point"}, coordinates: [Number] }
    // geometry: { { type: { type: String, default:"Point"}} }
},

{ 
    timestamps: {createdAt: 'create_at', updatedAt: 'updated_at' }
}
)

favorSchema.index({ location: '2dsphere' });
const Favor = mongoose.model('Favor', favorSchema);
module.exports = Favor;