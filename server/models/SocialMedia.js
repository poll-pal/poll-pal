const mongoose = require("mongoose");
const SocialMedia = require('./SocialMedia');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
    platform: String,
    url: String
});

// Export the SocialMedia model
module.exports = SocialMediaSchema;
