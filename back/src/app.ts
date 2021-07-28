import express from 'express';
import path from 'path';
import { createRestApiServer, connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { logger } from 'core/logger';
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from 'common/middlewares';
import { booksApi } from 'pods/book';
import { securityApi, authenticationMiddleware } from 'pods/security';

const restApiServer = createRestApiServer();

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use('/', express.static(staticFilesPath));

restApiServer.use(logRequestMiddleware(logger));

restApiServer.use('/api/security', securityApi);
restApiServer.use('/api/books', authenticationMiddleware, booksApi);

restApiServer.use(logErrorRequestMiddleware(logger));

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    logger.info('Connected to DB');
  } else {
    logger.info(`Server is running on port ${envConstants.PORT}`);
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
