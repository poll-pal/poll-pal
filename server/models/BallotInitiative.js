const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const BallotInitiativeSchema = new Schema({
    id: Number,
    name: String,
    official_title: String,
    text: String,
    yesVote: String,
    noVote: String,
    topic: String,
    summary: String,
    choice: String,
    type: String,
    url: String
});

// Export the Candidate model
module.exports = BallotInitiativeSchema;
