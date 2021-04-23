import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../routes';
import errorHandler from '../error_handler';
import passport from 'passport';

export default ({ app }: { app: express.Application }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../config/passportFacebook')(passport);
  app.use(passport.initialize());

  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // app.get('/auth/facebook', passport.authenticate('facebook'));
  //
  // app.get(
  //   '/auth/facebook/callback',
  //   passport.authenticate('facebook', {
  //     successRedirect: '/',
  //     failureRedirect: '/fail',
  //   }),
  // );
  //
  // app.get('/fail', (req, res) => {
  //   res.send('Failed attempt');
  // });
  //
  // app.get('/', (req, res) => {
  //   res.send('Success');
  // });
  // // Load API routes
  // app.use('/api', routes());
  // app.use('/auth', routes());
  routes({ app });
  errorHandler({ app });
};
