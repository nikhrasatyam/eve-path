// guaranteed to get dependencies

import { Router } from 'express';
import auth from '../api/auth';
export default ({ app }) => {
  const router = Router();
  auth(router);
  app.use('/auth', router);
};
