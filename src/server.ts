/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import http from 'http';
import { NextFunction, Request, Response } from 'express';
import app from '@src/app';
import { normalizePort } from '@src/utils/normalizePort';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app).listen(() => {
  console.log('Http server created successfully');
});
