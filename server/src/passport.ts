import passport from 'passport';
import LocalAuth from 'passport-local';
import GoogleAuth from 'passport-google-oauth20';
import FacebookAuth from 'passport-facebook';

require('dotenv').config();

// const LocalAuthStrategy = LocalAuth.Strategy;
const GoogleStrategy = GoogleAuth.Strategy;
const FacebookStrategy = FacebookAuth.Strategy;

// const CLENT_ID = 'email';
// const CLENT_PASSWORD = 'password';
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET as string;

const FACEBOOK_CLIENT_ID = 'your id';
const FACEBOOK_CLIENT_SECRET = 'your id';

// //UserID&password設定
// passport.use(
//   new LocalAuthStrategy(
//     {
//       usernameField: CLENT_ID,
//       passwordField: CLENT_PASSWORD,
//     },
//     function (username, password, done) {

//     },
//   ),
// );

//google認証設定
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    },
  ),
);

//facebook認証設定
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/return',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    },
  ),
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

export default passport;
