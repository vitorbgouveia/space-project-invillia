import { HttpExceptionFilter } from './../../infrastructure/http-exception.filter';
import { SharedService } from './../../infrastructure/services/shared.service';
import { Traveler } from './../../domain/entity/traveler.entity';
import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelerService } from './services/traveler.service';
import { APP_FILTER } from '@nestjs/core';
import { TravelerController } from './controllers/traveler.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Traveler]), HttpModule],
  controllers: [TravelerController],
  providers: [
    TravelerService,
    SharedService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class TravelerModule {}
