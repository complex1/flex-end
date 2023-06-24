import { IUser } from "../interface";

export const userObjectMapper = (user: IUser):IUser => {
  return {
    name: user.name,
    email: user.email,
    isVarified: user.isVarified,
    avatar: user.avatar
  } as IUser
}