import { IControllerCallback, IResponseBody, IUser } from "../interface";
import { dataToResponseObject } from "../mapper/dataToResponseObject";
import { decryptData, encryptData } from "../halper/encryptDecrypt";
import { MailService, UserService } from "../service";
import { sign } from 'jsonwebtoken';
import config from "../config";
export class UserController {
  private mailService: MailService;
  private userService: UserService;
  constructor() {
    this.mailService = new MailService();
    this.userService = new UserService();
  }
  public register = (User: IUser, cb: IControllerCallback) => {
    const user = {...User};
    user.password = encryptData(user.password);
    this.userService.register(user)
    .then((data) => {
      const token = encryptData(data.email+ ':' + data.name);
      this.mailService.sendMail(data.email, 'Welcome to NodeJS', token);
      cb(dataToResponseObject(data, 'User registered successfully', true));
    })
    .catch((err) => {
      if (err.code === 11000) {
        cb(dataToResponseObject(err, 'User already exists', false));
      } else if (err.name === 'ValidationError') {
        cb(dataToResponseObject(err, 'User validation failed', false));
      } else {
        cb(dataToResponseObject(err, 'User registration failed', false));
      }
    });
  }
  public verify = (token: string, cb: IControllerCallback) => {
    const data = decryptData(token);
    const [email, name] = data.split(':');
    this.userService.verify(email, name)
    .then((data) => {
      if (!data) {
        cb(dataToResponseObject(data, 'User not found', false));
      }
      cb(dataToResponseObject(data, 'User verified successfully', true));
    })
    .catch((err) => {
      cb(dataToResponseObject(err, 'User verification failed', false));
    });
  }
  public login = (email: string, password: string, cb: IControllerCallback) => {
    const encryptedPassword = encryptData(password);
    this.userService.login(email, encryptedPassword)
    .then((data) => {
      if (!data) {
        cb(dataToResponseObject(data, 'User not found', false));
      }
      const token = sign({
        email: data?.email,
        name: data?.name,
      }, config.security?.jwt_secret || 'token', { expiresIn: config.security.jwt_expiration });
      cb(dataToResponseObject({
        token
      }, 'User login successfully', true));
    })
    .catch((err) => {
      cb(dataToResponseObject(err, 'User login failed', false));
    });
  }
  public updatePassword = (email: string, oldPassword: string, password: string, cb: IControllerCallback) => {
    const encryptedPassword = encryptData(password);
    const encryptedOldPassword = encryptData(oldPassword);
    this.userService.updatePassword(email, encryptedOldPassword, encryptedPassword)
    .then((data) => {
      if (!data) {
        cb(dataToResponseObject(data, 'User not found', false));
      }
      cb(dataToResponseObject(data, 'Password updated successfully', true));
    })
    .catch((err) => {
      cb(dataToResponseObject(err, 'Password update failed', false));
    });
  }
}