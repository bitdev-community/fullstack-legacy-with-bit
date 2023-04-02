import express from 'express';
import cors from 'cors';
import helloRouter from './routes/hello';
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);

app.listen(port, () => {
  console.log(`Server listening on port $(port)`);
});

export default app;