import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PlanetService } from './planet.service';

import { Planet } from './../../../domain/entity/planet.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MocksForTest } from './../../../../__test__/utils/mocks';

let service: PlanetService;

describe('PlanetService', () => {
  const mockRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        PlanetService,
        {
          provide: getRepositoryToken(Planet),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PlanetService>(PlanetService);
  });

  describe('validating planetService', () => {
    it('should return planets', async () => {
      mockRepository.find.mockResolvedValue(MocksForTest.getPlanets());

      const resultTraveler = await service.searchPlanet();
      expect(resultTraveler).toHaveLength(1);
    });
  });
});
