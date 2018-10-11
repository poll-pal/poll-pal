const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
  (accessToken) => {
    console.log(accessToken);
  }));

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));



module.exports = router;
