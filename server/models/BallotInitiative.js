const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const BallotInitiativeSchema = new Schema({
    name: String,
    topic: String,
    description: String,
    choice: String,
    type: String,
    url: String
});

// Export the Candidate model
module.exports = BallotInitiativeSchema;
