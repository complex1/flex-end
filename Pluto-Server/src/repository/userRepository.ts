import { IUser } from "../interface";
import { UserModel } from "../models";

export class UserRepository {
  public register = (user: IUser): Promise<IUser> => {
    const userModel = new UserModel(user);
    return userModel.save();
  }
  public verify = (email: string, name: string): Promise<IUser | null> => {
    const query = { email, name };
    const update = { $set: { isVarified: true } };
    const options = { new: true };
    return UserModel.findOneAndUpdate(query, update, options);
  }

  public getUser = (email: string): Promise<IUser | null> => {
    const query = { email };
    return UserModel.findOne(query);
  }

  public updatePassword = (email: string, password: string): Promise<IUser | null> => {
    const query = { email };
    const update = { $set: { password } };
    const options = { new: true };
    return UserModel.findOneAndUpdate(query, update, options)
  }
}
