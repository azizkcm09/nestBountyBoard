import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bounty } from './bounty.entity';
import { Planet } from '../planets/planet.entity/planet.entity';
import { CreateBountyDto } from './dto/create-bounty.dto';

@Injectable()
export class BountiesService {
  constructor(
    @InjectRepository(Bounty)
    private readonly bountyRepository: Repository<Bounty>,

    @InjectRepository(Planet)
    private readonly planetRepository: Repository<Planet>,
  ) {}

  async create(createBountyDto: CreateBountyDto): Promise<Bounty> {
    const planet = await this.planetRepository.findOneBy({
      id: createBountyDto.planetId,
    });

    if (!planet) {
      throw new NotFoundException('Planet not found');
    }

    if (planet.destroyed) {
      throw new BadRequestException(
        'Cannot post a bounty on a destroyed planet',
      );
    }

    const bounty = this.bountyRepository.create({
      targetName: createBountyDto.targetName,
      reward: createBountyDto.reward,
      planet,
    });

    return this.bountyRepository.save(bounty);
  }

  async findAll(): Promise<Bounty[]> {
    return this.bountyRepository.find({
      relations: ['planet'],
    });
  }

  async findOne(id: number): Promise<Bounty> {
    const bounty = await this.bountyRepository.findOne({
      where: { id },
      relations: ['planet'],
    });

    if (!bounty) {
      throw new NotFoundException('Bounty not found');
    }

    return bounty;
  }

  async updateStatus(id: number, status: string): Promise<Bounty> {
    const bounty = await this.findOne(id);
    bounty.status = status;
    return this.bountyRepository.save(bounty);
  }
}
