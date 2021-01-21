import { HttpExceptionFilter } from './../infrastructure/http-exception.filter';
import { Module } from '@nestjs/common';
import { TravelerModule } from './traveler/traveler.module';
import { PlanetModule } from './planet/planet.module';
import { GalaxyModule } from './galaxy/galaxy.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [TravelerModule, PlanetModule, GalaxyModule],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
  exports: [],
  controllers: [],
})
export class ApplicationModule {}
