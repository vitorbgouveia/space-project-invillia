import { IGalaxy } from './galaxy';
import { ITraveler } from './traveler';

export interface IPlanet {
  id: number;
  name: string;
  galaxy: IGalaxy;
  travelers: ITraveler[];
}
