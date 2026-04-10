const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./User');
const config = require('./config');

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        
        if (user) {
            return done(null, user);
        }
        
        user = new User({
            googleId: profile.id,
            email: profile.emails[0].value, 
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            avatar: profile.photos[0].value,
            provider: 'google'
        });
        
        await user.save();
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// GitHub Strategy
passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL,
    userProfileURL: "https://api.github.com/user"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ githubId: profile.id });
        
        if (user) {
            return done(null, user);
        }
        
        user = new User({
            githubId: profile.id,
            username: profile.username,
            email: profile.emails ? profile.emails[0].value : '',
            firstName: profile.displayName || '',
            avatar: profile.photos[0].value,
            provider: 'github'
        });
        
        await user.save();
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: config.facebook.appID,
    clientSecret: config.facebook.appSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'displayName', 'photos', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ facebookId: profile.id });
        
        if (user) {
            return done(null, user);
        }
        
        user = new User({
            facebookId: profile.id,
            email: profile.emails ? profile.emails[0].value : '',
            firstName: profile.displayName || '',
            avatar: profile.photos[0].value,
            provider: 'facebook'
        });
        
        await user.save();
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Serialize User
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize User
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
