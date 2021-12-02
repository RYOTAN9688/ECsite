import express from 'express';
import cookieSession from 'cookie-session';
import cors from 'cors';
import passport from 'passport';
import passportSetUp from './passport';
import authRoute from './routes/auth';

const app = express();

app.use(cors());

app.use(cookieSession({ name: 'session', keys: ['Secret-key'], maxAge: 24 * 60 * 60 * 100 }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http/localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(passportSetUp.initialize());
app.use('/auth', authRoute);

app.listen('4000', () => {
  console.log('Server is running');
});
