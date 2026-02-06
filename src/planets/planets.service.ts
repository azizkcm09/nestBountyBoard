import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planet } from './planet.entity/planet.entity';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet)
    private readonly planetRepository: Repository<Planet>,
  ) {}

  async create(name: string): Promise<Planet> {
    const planet = this.planetRepository.create({ name });
    return this.planetRepository.save(planet);
  }

  async findAll(): Promise<Planet[]> {
    return this.planetRepository.find();
  }

  async findOne(id: number): Promise<Planet> {
    const planet = await this.planetRepository.findOneBy({ id });
    if (!planet) {
      throw new NotFoundException('Planet not found');
    }
    return planet;
  }

  async destroy(id: number): Promise<Planet> {
    const planet = await this.findOne(id);
    planet.destroyed = true;
    return this.planetRepository.save(planet);
  }
}
