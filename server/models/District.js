const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
    name: String,
    state: String,
    type: String,
    kml: String
});

// Export the Candidate model
module.exports = DistrictSchema;
