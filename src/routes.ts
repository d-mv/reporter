import express from 'express';
import { report } from './reporter';
const app: any = express;
const router = new app.Router();

router.post('/users', async (req: express.Request, res: express.Response) => {
  try {
    await report(req);
    res.status(201);
  } catch (e) {
    console.log(e);
  }
});

export default router;
