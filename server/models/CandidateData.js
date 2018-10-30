const mongoose = require("mongoose");
const SocialMedia = require('./SocialMedia');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: String,
    id: Number,
    office: String,
    party: String,
    district: String,
    state: String,
    incumbent: Number,
    website: String,
    twitter: String,
    choice: String,
    socialMedia: [SocialMedia]

});

// Export the Candidate model
module.exports = CandidateSchema;
