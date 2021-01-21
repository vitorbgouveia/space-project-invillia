import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { AbstractEntity } from './abstract.entity';
import { Galaxy } from './galaxy.entity';
import { Traveler } from './traveler.entity';

@Entity({ name: 'planet' })
export class Planet extends AbstractEntity {
  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Galaxy, { cascade: true, nullable: false })
  @JoinColumn({ name: 'id_galaxy' })
  galaxy: Galaxy;

  @OneToMany(
    type => Traveler,
    traveler => traveler.planet,
  )
  travelers: Traveler[];
}
