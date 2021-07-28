export const envConstants = {
  NODE_ENV: process.env.NODE_ENV,
  ROLLBAR_ACCESS_TOKEN: process.env.ROLLBAR_ACCESS_TOKEN,
  isProduction: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT,
  STATIC_FILES_PATH: process.env.STATIC_FILES_PATH,
  isApiMock: process.env.API_MOCK === 'true',
  MONGODB_URI: process.env.MONGODB_URI,
  AUTH_SECRET: process.env.AUTH_SECRET,
};
