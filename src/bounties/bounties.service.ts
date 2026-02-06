import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bounty } from './bounty.entity';

@Injectable()
export class BountiesService {
  constructor(
    @InjectRepository(Bounty)
    private readonly bountyRepository: Repository<Bounty>,
  ) {}

  async findAll(): Promise<Bounty[]> {
    return this.bountyRepository.find();
  }

  async findOne(id: number): Promise<Bounty | null> {
    return this.bountyRepository.findOneBy({ id });
  }

  async create(target: string, reward: number): Promise<Bounty> {
    const bounty = this.bountyRepository.create({
      target,
      reward,
      status: 'OPEN',
    });

    return this.bountyRepository.save(bounty);
  }

  async updateStatus(id: number): Promise<Bounty | null> {
    const bounty = await this.findOne(id);
    if (!bounty) return null;

    bounty.status = 'CLAIMED';
    return this.bountyRepository.save(bounty);
  }
}
