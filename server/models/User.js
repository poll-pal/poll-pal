const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    // googleId: {
    //     type: String,
    //     required: true
    // },
});


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
