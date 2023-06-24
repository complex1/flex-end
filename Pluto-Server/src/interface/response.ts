import { Request } from "express";

export interface IResponseBody {
  success: boolean;
  message: string;
  data: any;
  redirect: string;
}

export interface IControllerCallback { (data: IResponseBody): void }

export interface IUserResuest extends Request {
  userData: { email: string; name: string };
}
