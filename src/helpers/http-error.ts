/* eslint-disable @typescript-eslint/no-explicit-any */
interface IMakeHttpError {
  statusCode: number;
  errorMessage: string;
}
export default function makeHttpError({ statusCode, errorMessage }: IMakeHttpError): any {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode,
    data: JSON.stringify({
      success: false,
      error: errorMessage,
    }),
  };
}
