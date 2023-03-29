import express, { Request, Response } from 'express';
import cors from 'cors';
const router = express.Router();

const app = express();
app.use(cors());

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Add the prefix to all API routes
app.use('/api', router);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
