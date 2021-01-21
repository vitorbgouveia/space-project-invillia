import { IPlanet } from './planet';

export interface IGalaxy {
  id: number;
  name: string;
  ordination: number;
  imageLink: string;
  planets: IPlanet[];
}
