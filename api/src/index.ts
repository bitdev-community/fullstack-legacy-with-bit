import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import helloRouter from './routes/hello/hello';

const app = express();
app.use(cors());

app.use('/api', helloRouter);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
