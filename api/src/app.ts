import express from 'express';
import cors from 'cors';
import helloRouter from './routes/hello/hello';
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
