import { IResponseBody } from "../interface";

export const dataToResponseObject = (
  data: any,
  message: string,
  success: boolean,
  redirect?: string): IResponseBody => {
  return {
    success,
    message,
    data,
    redirect: redirect || ''
  };
}
