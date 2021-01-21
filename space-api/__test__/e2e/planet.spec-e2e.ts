import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule, INestApplication, HttpStatus } from '@nestjs/common';

import { AppModule } from '../../src/app.module';

import { PlanetController } from '../../src/application/planet/controllers/planet.controller';

import { SharedService } from '../../src/infrastructure/services/shared.service';
import { PlanetService } from '../../src/application/planet/services/planet.service';
import { MeetingService } from '../../src/application/planet/services/meeting.service';

import { Planet } from '../../src/domain/entity/planet.entity';
import { Meeting } from '../../src/domain/entity/meeting.entity';

import { MocksForTest } from './../utils/mocks';

import request from 'supertest';

describe('Test (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forFeature([Planet, Meeting]),
        HttpModule,
      ],
      controllers: [PlanetController],
      providers: [PlanetService, MeetingService, SharedService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    return await app.close();
  });

  describe('Testing planetController', () => {
    it('Should ingress traveler in meeting', async () => {
      return await request(app.getHttpServer())
        .post('/planet/meeting/join')
        .send(MocksForTest.getFormIngressMeeting())
        .expect((result: { body }) => {
          expect(result.body.link).toBeDefined();
        })
        .expect(HttpStatus.OK);
    });

    it('should return meeting', async () => {
      return await request(app.getHttpServer())
        .get('/planet/meeting?link=linkshow.com')
        .set('Authorization', `Bearer anyToken`)
        .expect((result: { body }) => {
          expect(result.body[0].link).toEqual('linkshow.com');
        })
        .expect(HttpStatus.OK);
    });

    it('Should return planets', async () => {
      return await request(app.getHttpServer())
        .get('/planet')
        .set('Authorization', `Bearer anyToken`)
        .expect(HttpStatus.OK);
    });
  });
});
