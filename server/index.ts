import 'reflect-metadata'; // We need this in order to use @Decorators
import express from 'express';
import config from './config';
import Logger from './loaders/logger';
import loaders from './loaders';

const app = express();

const startServer = async () => {
  await loaders({ expressApp: app });
  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
};
startServer();
