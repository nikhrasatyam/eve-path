import dotenv from 'dotenv';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Could not find the env file');
}

export default {
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  port: parseInt(process.env.PORT, 10),
};
