import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { dataToResponseObject } from '../mapper/dataToResponseObject';
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    res.send(dataToResponseObject(null, 'Unauthorized', false, '/login'));
  } else {
    try {
      const decodedToken = jwt.verify(token, config.security.jwt_secret || 'token') as {
        email: string;
        name: string;
      };
      req.user = { email: decodedToken?.email, name: decodedToken?.name };
      next();
    } catch (err) {
      res.send(dataToResponseObject(null, 'Unauthorized', false, '/login'));
    }
  }
}
