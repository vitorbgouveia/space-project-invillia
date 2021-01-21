import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule, INestApplication, HttpStatus } from '@nestjs/common';

import { AppModule } from '../../src/app.module';

import { GalaxyController } from './../../src/application/galaxy/controllers/galaxy.controller';

import { GalaxyService } from './../../src/application/galaxy/services/galaxy.service';

import { Galaxy } from './../../src/domain/entity/galaxy.entity';

import request from 'supertest';

describe('Test (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([Galaxy]), HttpModule],
      controllers: [GalaxyController],
      providers: [GalaxyService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    return await app.close();
  });

  describe('Testing galaxyController', () => {
    it('Should return galaxys', async () => {
      return await request(app.getHttpServer())
        .get('/galaxy')
        .expect((result: { body }) => {
          expect(result.body).toHaveLength(3);
        })
        .expect(HttpStatus.OK);
    });
  });
});
