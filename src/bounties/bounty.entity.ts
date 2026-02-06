import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Planet } from '../planets/planet.entity';

@Entity()
export class Bounty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  targetName: string;

  @Column()
  reward: number;

  @Column({ default: 'OPEN' })
  status: string;

  @ManyToOne(() => Planet, (planet) => planet.bounties, {
    eager: false,
    onDelete: 'CASCADE',
  })
  planet: Planet;
}
