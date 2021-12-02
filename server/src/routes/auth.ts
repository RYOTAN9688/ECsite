import express from 'express';
import passport from '../passport';

const app = express.Router();

const CLIENT_URL = 'http://localhost:3000/';

app.get(
  '/login/success',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'ログインに成功しました',
        user: req.user,
      });
    }
  },
);

app.get(
  '/login/failed',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(400).json({
      success: false,
      message: 'ログインに失敗しました',
    });
  },
);

app.get('/logout', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  req.logOut();
  res.redirect(CLIENT_URL);
});

// //userID&password認証
// app.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true,
//   }),
// );

//Google認証
app.get('/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  }),
);

//facebook認証
app.get('/facebook', passport.authenticate('facebook', { scope: ['profile'] }));

app.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  }),
);

export default app;
