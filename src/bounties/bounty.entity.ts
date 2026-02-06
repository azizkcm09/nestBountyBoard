import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bounty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  target: string;

  @Column()
  reward: number;

  @Column({ default: 'OPEN' })
  status: 'OPEN' | 'CLAIMED';
}
