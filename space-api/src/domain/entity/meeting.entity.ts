import { Column, Entity, ManyToOne, JoinColumn, Unique } from 'typeorm';

import { AbstractEntity } from './abstract.entity';
import { Planet } from './planet.entity';
import { Traveler } from './traveler.entity';

@Entity({ name: 'meeting' })
@Unique(['traveler'])
export class Meeting extends AbstractEntity {
  @Column({ length: 255, nullable: false })
  link: string;

  @ManyToOne(() => Traveler, { cascade: true })
  @JoinColumn({ name: 'id_traveler' })
  traveler: Traveler;

  @ManyToOne(() => Planet, { cascade: true, nullable: false })
  @JoinColumn({ name: 'id_planet' })
  planet: Planet;
}
