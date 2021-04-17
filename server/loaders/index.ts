import expressLoader from './express';
import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';

export default async ({ expressApp }) => {
  await dependencyInjectorLoader();
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
