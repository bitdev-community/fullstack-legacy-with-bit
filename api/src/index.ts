import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
