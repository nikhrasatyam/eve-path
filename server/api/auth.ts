import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate, Joi } from 'celebrate';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);
  const logger: Logger = Container.get('logger');
  route.post(
    '/signup',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
      try {
        return res.status(201).json({ test: test });
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.get('/test', async (req: Request, res: Response, next: NextFunction) => {
    logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
    try {
      return res.status(200).json({ test: 'test' });
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });
};
