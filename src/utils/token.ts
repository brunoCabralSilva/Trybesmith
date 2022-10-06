import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class Token { 
  generateToken = (username: string, classe: string, level: number): string => {
    const payload = {
      username,
      classe,
      level,
    };
    const secret: string = process.env.JWT_SECRET || 'Isopotametemumdomsani618';
    const json = jwt.sign(payload, secret);
    return json;
  };
}