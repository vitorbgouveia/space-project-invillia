import { IPlanet } from './planet';

export interface IGalaxy {
  name: string;
  ordination: number;
  imageLink: string;
  planets: IPlanet[];
}
