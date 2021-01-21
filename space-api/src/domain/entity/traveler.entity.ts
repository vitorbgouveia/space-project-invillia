import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { AbstractEntity } from './abstract.entity';
import { Planet } from './planet.entity';

@Entity({ name: 'traveler' })
export class Traveler extends AbstractEntity {
  @Column({ length: 60, nullable: false, unique: true, name: 'nick_name' })
  nickName: string;

  @Column({ length: 120, nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  avatar: number;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ type: 'text', nullable: true })
  jwt: string;

  @ManyToOne(() => Planet, { cascade: true, nullable: false })
  @JoinColumn({ name: 'id_planet' })
  planet: Planet;
}
