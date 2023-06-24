export * from './user';
export * from './response';

declare global {
  namespace Express {
    interface Request {
      user: {
        email: string;
        name: string;
      };
      cookies: {
        [key: string]: string;
      };
    }
    interface Response {
      file: any
    }
  }
}