import { HttpModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';

import { AbstractService } from '../../../shared/services/abstract.service';
import { AuthService } from './auth.service';

import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { MocksForTest } from '../../../../__test__/utils/mocks';

let service: AuthService;

describe('AuthService', () => {
  const mockAbstractService = {
    requestToSpace: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  // Criamos o módulo no método 'beforeEach'.
  // Isso garantirá que o módulo seja criado antes que qualquer teste possa ser executado
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
        AuthService,
        {
          provide: AbstractService,
          useValue: mockAbstractService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  // Pesquisa Todas as Unidades Gestoras com Parâmetros
  describe('validate-user', () => {
    const payload: JwtPayload = {
      userInfo: {
        id: 1,
        email: 'vitorbgouveia@gmail.com',
        nickName: 'vitorvlw',
      },
    };

    it('should get traveler and validate traveler', async () => {
      jest
        .spyOn(mockAbstractService, 'requestToSpace')
        .mockImplementation(() => {
          return {
            data: MocksForTest.getTraveler(),
          };
        });

      const resultUserValid = await service.validateUser(payload);
      expect(resultUserValid).toBeDefined();
    });

    it('should be return response create token', async () => {
      jest.spyOn(mockJwtService, 'sign').mockImplementation(() => 'anyToken');

      const resultToken = await service.createToken(payload);
      expect(resultToken).toBeDefined();
    });
  });
});
