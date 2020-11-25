const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');

const config = require('../config/keys');
const googleClientID = config.clientID;
const googleClientSecret = config.clientSecret;

const User = require('../model/index');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});



passport.use(
    new Strategy(
        {
            clientID: googleClientID,
            clientSecret: googleClientSecret,
            callbackURL: '/auth/google/callback',
            scope: ['profile', 'email']
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const user = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile._json.emil
            });

            done(null, user);
        }
    )
);

