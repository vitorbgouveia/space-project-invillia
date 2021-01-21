import { Galaxy } from '../entity/galaxy.entity';
import { ITraveler } from './traveler';

export interface IPlanet {
  id?: number;
  name?: string;
  galaxy?: Galaxy | Partial<Galaxy>;
  travelers?: ITraveler[];
}
