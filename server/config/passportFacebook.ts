import dotenv from 'dotenv';
import strategy from 'passport-facebook';
const FacebookStrategy = strategy.Strategy;

dotenv.config();

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ['email', 'name'],
      },
      function (accessToken, refreshToken, profile, done) {
        const { email, first_name, last_name } = profile._json;
        const userData = {
          email,
          firstName: first_name,
          lastName: last_name,
        };
        console.log(userData);
        done(null, profile);
      },
    ),
  );
};
