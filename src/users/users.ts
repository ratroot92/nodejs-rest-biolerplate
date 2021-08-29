/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import requiredParam from '@src/helpers/required-params';
import { InvalidPropertyError } from '@src/helpers/error';
import isValidEmail from '../helpers/is-valid-email.js';
import upperFirst from '../helpers/upper-first';
import { IUser } from './types.js';

export interface INormalizeProps {
  emailAddress: string;
  firstName: string;
  lastName: string;
  otherInfo: any;
}

export default function makeUser(userInfo: any): any {
  const validUser = validate(userInfo);
  const normalUser = normalize(validUser);
  return Object.freeze(normalUser);

  function validate({
    firstName = requiredParam('firstName'),
    lastName = requiredParam('lastName'),
    emailAddress = requiredParam('emailAddress'),
    ...otherInfo
  }: IUser) {
    validateName('first', firstName);
    validateName('last', lastName);
    validateEmail(emailAddress);
    return { firstName, lastName, emailAddress, ...otherInfo };
  }

  function validateName(label: string, name: string): any {
    if (name.length < 2) {
      throw new InvalidPropertyError(`A User's ${label} name must be at least 2 characters long.`);
    }
  }

  function validateEmail(emailAddress: string): any {
    if (!isValidEmail(emailAddress)) {
      throw new InvalidPropertyError('Invalid User email address.');
    }
  }

  function normalize({ emailAddress, firstName, lastName, ...otherInfo }: INormalizeProps): any {
    return {
      ...otherInfo,
      firstName: upperFirst(firstName),
      lastName: upperFirst(lastName),
      emailAddress: emailAddress.toLowerCase(),
    };
  }
}
