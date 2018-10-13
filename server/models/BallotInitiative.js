const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const BallotInitiativeSchema = new Schema({
    name: String,
    description: String,
    choice: String
});

// Export the Candidate model
module.exports = BallotInitiativeSchema;
