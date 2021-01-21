import { IReturnCreateToken, IUserLogged } from '../interfaces/auth';
import { HttpModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';

import { LoginService } from './login.service';
import { TravelerService } from './traveler.service';
import { AbstractService } from '../../../shared/services/abstract.service';
import { AuthService } from './auth.service';

import { JwtPayload } from '../interfaces/jwt-payload.interface';

import { MocksForTest } from '../../../../__test__/utils/mocks';

let service: LoginService;

describe('LoginService', () => {
  const mockAbstractService = {
    requestToSpace: jest.fn(),
  };

  const mockTravelerService = {
    getTraveler: jest.fn(),
  };

  const mockAuthService = {
    createToken: jest.fn(),
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
        LoginService,
        {
          provide: TravelerService,
          useValue: mockTravelerService,
        },
        {
          provide: AbstractService,
          useValue: mockAbstractService,
        },
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  // Pesquisa Todas as Unidades Gestoras com Parâmetros
  describe('validating loginService', () => {
    const payload: JwtPayload = {
      userInfo: {
        id: 1,
        email: 'vitorbgouveia@gmail.com',
        nickName: 'vitorvlw',
      },
    };

    const userLogged: IUserLogged = {
      payload,
      traveler: MocksForTest.getTraveler()[0],
    };

    const responseCreateToken: IReturnCreateToken = {
      accessToken: 'anyToken',
      expiresIn: '1234567894564',
    };

    it('should execute login', async () => {
      jest
        .spyOn(mockTravelerService, 'getTraveler')
        .mockImplementation(() => MocksForTest.getTraveler());

      jest
        .spyOn(mockAuthService, 'createToken')
        .mockImplementation(() => responseCreateToken);

      mockAbstractService.requestToSpace.mockResolvedValue({});

      const resultLoginUser = await service.login(MocksForTest.getFormLogin());
      expect(resultLoginUser).toBeDefined();
    });

    it('should execute logout', async () => {
      mockAbstractService.requestToSpace.mockResolvedValue({});

      const resultLogoutUser = await service.logout({
        user: userLogged,
        headers: { Authorization: 'any' },
      });
      expect(resultLogoutUser).toEqual(undefined);
    });
  });
});
