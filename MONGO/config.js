// MongoDB and OAuth Configuration
const mongoose = require('mongoose');

const config = {
    // MongoDB Connection
    mongoURI: 'mongodb://localhost:27017/oauth_db',
    
    // Google OAuth
    google: {
        clientID: 'YOUR_GOOGLE_CLIENT_ID',
        clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    
    // GitHub OAuth
    github: {
        clientID: 'YOUR_GITHUB_CLIENT_ID',
        clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    
    // Facebook OAuth
    facebook: {
        appID: 'YOUR_FACEBOOK_APP_ID',
        appSecret: 'YOUR_FACEBOOK_APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    
    // Session Secret
    sessionSecret: 'your-secret-key-change-this'
};

module.exports = config;
