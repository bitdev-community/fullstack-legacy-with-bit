import express from 'express';
import cors from 'cors';
import helloRouter from './routes/hello';
import goodbyeRouter from '@learnbit/bit-pioneers.routes.goodbye';
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);
app.use('/api/goodbye', goodbyeRouter);

app.listen(port, () => {
  console.log(`Server listening on port $(port)`);
});

export default app;
