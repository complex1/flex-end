import { IUser } from "../interface";
import { userObjectMapper } from "../mapper/userObjectMapper";
import { UserRepository } from "../repository";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  public register = (user: IUser): Promise<IUser> => {
    return new Promise((resolve, reject) => {
      this.userRepository.register(user)
        .then((data) => {
          resolve(userObjectMapper(data));
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
  public verify = (email: string, name: string): Promise<IUser | null> => {
    return new Promise((resolve, reject) => {
      this.userRepository.verify(email, name)
        .then((data) => {
          if (!data) {
            resolve(data);
          }
          resolve(userObjectMapper(data as IUser));
        })
        .catch((err) => {
          reject(err);
        });
    }
    )
  }
  public login = (email: string, password: string): Promise<IUser | null> => {
    return new Promise((resolve, reject) => {
      this.userRepository.getUser(email)
        .then((data) => {
          if (!data) {
            reject(data);
          }
          if (data.password === password) {
            resolve(userObjectMapper(data as IUser));
          } else {
            reject(new Error('Password not match'))
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
    )
  }
  public updatePassword = (email: string, oldPassword: string, password: string): Promise<IUser | null> => {
    return new Promise(async (resolve, reject) => {
      this.login(email, oldPassword)
        .then(() => {
          this.userRepository.updatePassword(email, password)
            .then((data) => {
              if (!data) {
                resolve(data);
              }
              resolve(userObjectMapper(data as IUser));
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}