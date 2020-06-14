import express from 'express';
import { domainController } from './controller';
const app: any = express;
const router = new app.Router();

const { log, dir } = console;

router.post('/report', async (req: express.Request, res: express.Response) => {
  try {
    domainController(req.body);
    res.send('OK');
  } catch (e) {
    log('Error:');
    dir(e);
    res.send('NOT OK');
  }
});

router.post('*', (_req: express.Request, res: express.Response) => {
  res.send('n/a');
});

export default router;
