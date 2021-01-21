import { HttpModule, HttpService } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';

import { TravelerService } from '../services/traveler.service';
import { AbstractService } from './../../../shared/services/abstract.service';

import { MocksForTest } from '../../../../__test__/utils/mocks';

let service: TravelerService;
let abstractService: AbstractService;

describe('LoginService', () => {
  const mockHttpService: any = {
    request: () => mockHttpService,
    toPromise: () => mockHttpService,
    catch: () => {
      return { data: MocksForTest.getTraveler() };
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        PassportModule.register({
          defaultStrategy: 'jwt',
          property: 'user',
          session: false,
        }),
        JwtModule.register({
          secret: process.env.SECRETKEY,
          signOptions: {
            expiresIn: process.env.EXPIRESIN,
          },
        }),
      ],
      providers: [
        TravelerService,
        AbstractService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<TravelerService>(TravelerService);
    abstractService = module.get<AbstractService>(AbstractService);
  });

  describe('validating travelerService', () => {
    it('should get Travelers', async () => {
      const resultLoginUser = await service.getTraveler(
        'token',
        MocksForTest.getFormLogin(),
      );
      expect(resultLoginUser).toBeDefined();
    });
  });
});
