import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/goodbye', (req: Request, res: Response) => {
  res.send('Goodbye!');
});

export default router;
