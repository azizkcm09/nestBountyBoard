import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

import { BountiesService } from './bounties.service';
import { Bounty } from './bounty.entity';
import { Planet } from '../planets/planet.entity';

describe('BountiesService', () => {
  let service: BountiesService;

  const mockBountyRepository = { create: jest.fn(), save: jest.fn() };
  const mockPlanetRepository = { findOneBy: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BountiesService,
        { provide: getRepositoryToken(Bounty), useValue: mockBountyRepository },
        { provide: getRepositoryToken(Planet), useValue: mockPlanetRepository },
      ],
    }).compile();

    service = module.get<BountiesService>(BountiesService);
  });

  it('should throw an error if planet is destroyed', async () => {
    mockPlanetRepository.findOneBy.mockResolvedValue({ id: 1, name: 'Alderaan', destroyed: true });

    await expect(
      service.create({ targetName: 'Leia', reward: 5000, planetId: 1 }),
    ).rejects.toThrow(BadRequestException);
  });
});
