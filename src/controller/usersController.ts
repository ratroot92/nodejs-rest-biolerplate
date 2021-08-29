/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import adaptRequest from '@src/helpers/adaptRequest';
import handleUsersRequest from '@src/users/users-endpoint';

export default function usersController(req: Request, res: Response): Promise<any> {
  const httpRequest: any = adaptRequest(req);
  return handleUsersRequest(httpRequest)
    .then(({ headers, statusCode, data }: { headers: any; statusCode: number; data: any }) => {
      return res.set(headers).status(statusCode).send(data);
    })
    .catch((e: any) => {
      console.log(`exception at handleUserrequest => \n ${e}`);
      return res.status(500).end();
    });
}
