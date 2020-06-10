import express from 'express';
import report from './reporter';
import { domainController } from './controller';
const app: any = express;
const router = new app.Router();

const { log, dir } = console;

// refactor
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    await report(req.query);
    res.status(201);
  } catch (e) {
    console.log(e);
  }
});

interface Props {
  domain: string;
  data: Record<string, unknown>;
}

router.post('/report', async (req: express.Request, res: express.Response) => {
  try {
    domainController(req.body);
    res.send('OK');
  } catch (e) {
    log('Error:')
    dir(e);
    res.send('NOT OK');
  }
});

export default router;
