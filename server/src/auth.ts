import express from 'express';
const router = express.Router();
const passport = require('passport');

const CLIENT_URL = 'https://localhost:3000/';

router.get(
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

router.get(
  'login/failed',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(400).json({
      success: false,
      message: 'ログインに失敗しました',
    });
  },
);

router.get('/logout', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  req.logOut();
  res.redirect(CLIENT_URL);
});
