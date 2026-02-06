import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bounty } from '../../bounties/bounty.entity';

@Entity()
export class Planet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  destroyed: boolean;

  @OneToMany(() => Bounty, bounty => bounty.planet)
  bounties: Bounty[];
}
