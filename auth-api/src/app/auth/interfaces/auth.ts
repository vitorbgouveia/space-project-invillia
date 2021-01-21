import { JwtPayload } from './jwt-payload.interface';
import { ITraveler } from './traveler';

export interface IReturnCreateToken {
  expiresIn: string;
  accessToken: string;
}

export interface IUserLogged {
  traveler: ITraveler;
  payload: JwtPayload;
}
