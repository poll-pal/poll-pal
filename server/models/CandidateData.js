const mongoose = require("mongoose");
const SocialMedia = require('./SocialMedia');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: String,
    office: String,
    party: String,
    district: String,
    state: String,
    incumbent: Boolean,
    website: String,
    socialMedia: [SocialMedia]

});

// Export the Candidate model
module.exports = CandidateSchema;
