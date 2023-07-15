import express from 'express';
import { createServer } from 'http';

import expressConfig from './config/express';
import swaggerDocs from './config/swagger';
import routes from './routes';
import errorHandler from './middleware/errorHandler';

// setup server
const app = express();
export const server = createServer(app);

const port = process.env.PORT ?? 8080;

// setup express
expressConfig(app);
// routes
routes(app);
// Swagger
swaggerDocs(app, port as number);
// Error handler
app.use(errorHandler);

export default app;
