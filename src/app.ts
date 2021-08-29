import express, { NextFunction, Request, Response, Application } from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import methodOverride from 'method-override';
import logging from './helpers/logging';
import usersController from '@src/controller/usersController';

const NAMESPACE = 'Server';
const app: Application = express();
/** # BEFORE CORS START  #* */
app.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
  // res.on('finish', () => {
  //   logging.error(
  //     NAMESPACE,
  //     `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
  //   );
  // });
  next();
});
/** # BEFORE CORS END   #* */
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(methodOverride());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  // app.use(errorHandler());
}
app.use('/', (req: Request, res: Response) => {
  res.send();
});

app.all('/users', usersController);

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });
app.listen(process.env.PORT, () => {
  console.log(`Express listening at ${process.env.HOST}:${process.env.PORT}`);
});

export default app;
