const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: String,
    race: String,
    party: String
});

// Export the Candidate model
module.exports = CandidateSchema;
