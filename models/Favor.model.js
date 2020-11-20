const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favorSchema = new Schema(
  {
    createrUserId: { type: Schema.Types.ObjectId, ref: "User" }, //person who creates it
    providerUserId: [
      { type: Schema.Types.ObjectId, ref: "User", default: null },
    ],
    title: { type: String, maxlength: 50 },
    date: { type: Date, required: true },
    timeStart: { type: Date, required: true },
    timeEnd: { type: Date, required: true },
    description: { type: Date, required: false },
    tags: [String],
    comments: [
      { user: { type: Schema.Types.ObjectId, ref: "User" }, comment: String },
    ],
    status: {
      type: String,
      enum: ["Favor Created", "Favor Accepted", "Favor Finished"],
      default: "Favor Asked",
    },
    satisScore: {
      createrToProviderScore: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true,
      },
      createrToProviderComment: { type: String, required: true },
      ProviderToCreaterScore: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true,
      },
      ProviderToCreaterComment: { type: String, required: true },
    },
    location: { type: { type: String }, coordinates: [Number] },
  },
  {
    timestamps: { createdAt: "create_at", updatedAt: "updated_at" },
  }
);

favorSchema.index({ location: "2dsphere" });

// create Model
const Favor = mongoose.model("Favor", favorSchema);

//export Model
module.exports = Favor;

// askerUserId, providerUserId, title, date, timeStart, timeEnd, description, tags, comments, status,satisfactionScore,location
