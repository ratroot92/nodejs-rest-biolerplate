/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';

export interface IAdaptRequest {
  path: string;
  method: string;
  pathParams: any;
  queryParams: any;
  body: any;
}

export default function adaptRequest(req: Request): any {
  return Object.freeze({
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body,
  });
}
