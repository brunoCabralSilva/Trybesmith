import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import { JwtConfig } from '../interface/IToken';
import { Payload } from '../interface/IToken';

dotenv.config();

export default class Token { 
  generateToken = (username: string, classe: string, level: number): string => {
    const payload: Payload = {
      username,
      classe,
      level,
    };
    // const jwtConfig: JwtConfig = {
    //   expiresIn: '1000min',
    //   algorithm: 'HS256',
    // };
    const secret: string = process.env.JWT_SECRET || 'Isopotametemumdomsani618';
    const json = jwt.sign(payload, secret);
    return json;
  };
}