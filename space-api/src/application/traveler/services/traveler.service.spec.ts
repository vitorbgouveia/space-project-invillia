import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { TravelerService } from './traveler.service';
import { SharedService } from './../../../infrastructure/services/shared.service';

import { Traveler } from './../../../domain/entity/traveler.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MocksForTest } from './../../../../__test__/utils/mocks';

let service: TravelerService;

describe('TravelerService', () => {
  const mockSharedService = {
    validUniqueColumn: jest.fn(),
  };

  const mockRepository = {
    save: jest.fn(),
    update: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        TravelerService,
        {
          provide: getRepositoryToken(Traveler),
          useValue: mockRepository,
        },
        {
          provide: SharedService,
          useValue: mockSharedService,
        },
      ],
    }).compile();

    service = module.get<TravelerService>(TravelerService);
  });

  describe('validating travelerService', () => {
    it('should create traveler', async () => {
      mockSharedService.validUniqueColumn.mockResolvedValue({});

      mockRepository.save.mockResolvedValue(MocksForTest.getTraveler()[0]);

      const resultTraveler = await service.create(
        MocksForTest.getTraveler()[0],
      );
      expect(resultTraveler).toBeDefined();
    });

    it('should update traveler', async () => {
      mockRepository.update.mockResolvedValue({});
      mockRepository.findOne.mockResolvedValue(MocksForTest.getTraveler()[0]);

      const resultTraveler = await service.update(
        1,
        MocksForTest.getTraveler()[0],
      );
      expect(resultTraveler).toBeDefined();
    });

    it('should remove traveler', async () => {
      mockRepository.delete.mockResolvedValue({});

      const resultTraveler = await service.delete(1);
      expect(resultTraveler).toBeDefined();
    });

    it('should return travelers', async () => {
      const req = { query: { nickName: '1', email: 'email1@testgmail.com' } };
      mockRepository.find.mockResolvedValue(MocksForTest.getTraveler());

      const resultTraveler = await service.searchTraveler(req, 1, 50);
      expect(resultTraveler).toHaveLength(1);
    });
  });
});
