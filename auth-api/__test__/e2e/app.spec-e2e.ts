import { HttpModule, INestApplication, HttpStatus } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test } from '@nestjs/testing';

import { AppModule } from '../../src/app.module';

import { AuthController } from './../../src/app/auth/controllers/auth.controller';

import { TravelerService } from '../../src/app/auth/services/traveler.service';
import { AbstractService } from '../../src/shared/services/abstract.service';
import { LoginService } from '../../src/app/auth/services/login.service';
import { AuthService } from '../../src/app/auth/services/auth.service';
import { JwtStrategy } from '../../src/app/jwt.strategy';

import { JwtPayload } from './../../src/app/auth/interfaces/jwt-payload.interface';
import LoginResponseDTO from 'src/app/auth/dto/login-response.dto';

import { MocksForTest } from '../utils/mocks';

import request from 'supertest';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let abstractService: AbstractService;

  const mockAbstractService = {
    requestToSpace: jest.fn(),
  };

  const mockTravelerService = {
    getTraveler: jest.fn(),
    requestToSpace: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        AppModule,
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
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtStrategy,
        LoginService,
        {
          provide: TravelerService,
          useValue: mockTravelerService,
        },
        {
          provide: AbstractService,
          useValue: mockAbstractService,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    abstractService = moduleFixture.get<AbstractService>(AbstractService);
    await app.init();
  });

  afterEach(async () => {
    return await app.close();
  });

  describe('Testing authController', () => {
    let token: string;
    it('Should execute login user', async () => {
      mockTravelerService.getTraveler.mockResolvedValue(
        MocksForTest.getTraveler(),
      );

      mockAbstractService.requestToSpace.mockResolvedValue({});

      return await request(app.getHttpServer())
        .post('/auth')
        .send(MocksForTest.getFormLogin())
        .expect((result: { body: LoginResponseDTO }) => {
          token = result.body.token;
          expect(result.body.token).toBeDefined();
        })
        .expect(HttpStatus.OK);
    });

    it('should return payload user', async () => {
      jest
        .spyOn(abstractService, 'requestToSpace')
        .mockImplementation(
          () =>
            new Promise((resolve: any) =>
              resolve({ data: MocksForTest.getTraveler() }),
            ),
        );

      return await request(app.getHttpServer())
        .get('/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect((result: { body: { payload: JwtPayload } }) => {
          expect(result.body.payload.userInfo.id).toBeDefined();
        })
        .expect(HttpStatus.OK);
    });

    it('Should execute logout user', async () => {
      jest
        .spyOn(abstractService, 'requestToSpace')
        .mockImplementation(
          () =>
            new Promise((resolve: any) =>
              resolve({ data: MocksForTest.getTraveler() }),
            ),
        );

      return await request(app.getHttpServer())
        .post('/logout')
        .set('Authorization', `Bearer ${token}`)
        .expect(HttpStatus.OK);
    });
  });
});
