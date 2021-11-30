import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(4000, () => console.log('server is running'));
