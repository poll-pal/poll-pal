const mongoose = require("mongoose");
const Candidate = require('./CandidateData');
const BallotInitiative = require('./BallotInitiative');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    },
    ballotInitiatives: [BallotInitiative],
    candidates: [Candidate],
});


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
