import { IPlanet } from './planet';

export interface ITraveler {
  id: number;
  nickName: string;
  email: string;
  avatar: number;
  password: string;
  jwt: string;
  planet: IPlanet | number;
}
