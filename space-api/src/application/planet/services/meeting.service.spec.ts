import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { MeetingService } from './meeting.service';

import { Meeting } from './../../../domain/entity/meeting.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MocksForTest } from './../../../../__test__/utils/mocks';

let service: MeetingService;

describe('MeetingService', () => {
  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        MeetingService,
        {
          provide: getRepositoryToken(Meeting),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<MeetingService>(MeetingService);
  });

  describe('validating meetingService', () => {
    it('should ingress traveler to meeting', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      mockRepository.save.mockResolvedValue({ id: 1 });

      const resultTraveler = await service.ingressMeeting(
        MocksForTest.getFormIngressMeeting(),
      );
      expect(resultTraveler).toBeDefined();
    });

    it('should search meeting', async () => {
      const req = { query: { link: 'teste.com', id: 1 } as Meeting };

      mockRepository.find.mockResolvedValue({ id: 1 });

      const resultTraveler = await service.searchMeeting(req);
      expect(resultTraveler).toBeDefined();
    });
  });
});
