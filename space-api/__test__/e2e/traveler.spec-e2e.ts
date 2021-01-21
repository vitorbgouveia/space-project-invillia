import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule, INestApplication, HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../../src/app.module';

import { TravelerController } from '../../src/application/traveler/controllers/traveler.controller';

import { SharedService } from '../../src/infrastructure/services/shared.service';
import { TravelerService } from '../../src/application/traveler/services/traveler.service';

import { Traveler } from '../../src/domain/entity/traveler.entity';

import { MocksForTest } from './../utils/mocks';

import request from 'supertest';

describe('Test (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([Traveler]), HttpModule],
      controllers: [TravelerController],
      providers: [TravelerService, SharedService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    return await app.close();
  });

  describe('Testing travelerController', () => {
    const traveler = MocksForTest.getTraveler()[0];
    let idTraveler: number;

    it('Should create traveler', async () => {
      return await request(app.getHttpServer())
        .post('/traveler/create')
        .send(traveler)
        .expect((result: { body }) => {
          idTraveler = result.body.id;
          expect(result.body.email).toBeDefined();
        })
        .expect(HttpStatus.CREATED);
    });

    it('should update traveler', async () => {
      traveler.nickName = 'vaiDarCerto';
      return await request(app.getHttpServer())
        .patch(`/traveler/${idTraveler}`)
        .send(traveler)
        .set('Authorization', `Bearer anyToken`)
        .expect((result: { body }) => {
          expect(result.body.nickName).toEqual('vaiDarCerto');
        })
        .expect(HttpStatus.OK);
    });

    it('Should return travelers', async () => {
      return await request(app.getHttpServer())
        .get('/traveler?page=1&size=50&nickName=vaiDarCerto')
        .set('Authorization', `Bearer anyToken`)
        .expect((result: { body }) => {
          expect(result.body[0].nickName).toEqual('vaiDarCerto');
        })
        .expect(HttpStatus.OK);
    });

    it('Should remove traveler', async () => {
      return await request(app.getHttpServer())
        .delete(`/traveler/${idTraveler}`)
        .set('Authorization', `Bearer anyToken`)
        .expect(HttpStatus.OK);
    });
  });
});
