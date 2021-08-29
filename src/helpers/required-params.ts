import { RequiredParameterError } from '@src/helpers/error';

export default function requiredParam(param: string): string {
  throw new RequiredParameterError(param);
}
