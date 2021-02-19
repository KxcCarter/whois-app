import { Request, Response } from 'express';
import express from 'express';
// import axios from 'axios';

import whoIs from '../api/whoIs';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  whoIs
    .get('/', {
      params: {
        domainName: req.query.domainName,
      },
    })
    .then((response: any): void => {
      console.log('Success');
      res.send(response.data);
    })
    .catch((err: string): void => {
      console.error(err);
    });
});

export default router;
