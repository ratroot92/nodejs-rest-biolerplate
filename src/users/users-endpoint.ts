/* eslint-disable no-empty-pattern */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import makeHttpError from '@src/helpers/http-error';
import { InvalidPropertyError, RequiredParameterError, UniqueConstraintError } from '@src/helpers/error';
import { IAdaptRequest } from '@src/helpers/adaptRequest';
import userList from '@src/users/users';

export default function makeUsersEndpiontHandler({ userList }: any): any {
  // return async function handle(httpRequest: any): Promise<any> {
  return async function handle(httpRequest: any): Promise<any> {
    switch (httpRequest.method) {
      case 'POST':
        return postUser(httpRequest);
      case 'GET':
        return getUser(httpRequest);
      //   default:
      //     return makeHttpError({
      //       statusCode: 405,
      //       errorMessage: `${httpRequest.method} method not allowed`,
      //     });
      // }
    }
  };
}

async function getUser(httpRequest: any): Promise<any> {
  const { id } = httpRequest.pathParams;
  // const { max, before, after } = httpRequest.queryParams || {};
  // const result = id ? await userList.findById({ userId: id }) : await userList.getItems((max, before, after));
  return {
    Headers: {
      'Content-Type': 'applicatin/json',
    },
    statusCode: 200,
    // data: JSON.string(result),
  };
}

async function postUser(httpRequest: any): Promise<any> {
  let userInfo = httpRequest.body;
  if (!userInfo) {
    return makeHttpError({
      statusCode: 400,
      errorMessage: 'Bad request. PNo POST body.',
    });
  }
  if (typeof httpRequest.body === 'string') {
    try {
      userInfo = JSON.parse(userInfo);
    } catch (e) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Bad request. POST body must be valid JSON.',
      });
    }
  }
  try {
    console.log('inside');
    // const user = makeUser(userInfo);
    // const result = await userList.add(user);
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 201,
      // data: JSON.stringify(result),
    };
  } catch (e) {
    return makeHttpError({
      statusCode: 400,
      errorMessage: 'Bad request. POST body must be valid JSON.',
    });
  }
}
