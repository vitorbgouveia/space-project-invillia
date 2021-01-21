import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { AbstractEntity } from './abstract.entity';
import { Planet } from './planet.entity';

@Entity({ name: 'galaxy' })
export class Galaxy extends AbstractEntity {
  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, unique: true })
  ordination: number;

  @Column({ nullable: true, name: 'image_link', type: 'text' })
  imageLink: string;

  @JoinColumn()
  @OneToMany(
    type => Planet,
    planet => planet.galaxy,
  )
  planets: Planet[];
}
