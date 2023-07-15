/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import author from './modules/author';
import book from './modules/book';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/authors', author);
  app.use('/api/books', book);
}

export default routes;
