import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PlanetsService } from './planets.service';
import { Planet } from './planet.entity';

describe('PlanetsService', () => {
  let service: PlanetsService;

  const mockPlanetRepository = { create: jest.fn(), save: jest.fn(), find: jest.fn(), findOneBy: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetsService,
        { provide: getRepositoryToken(Planet), useValue: mockPlanetRepository },
      ],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
