import { Meeting } from './../../domain/entity/meeting.entity';
import { Planet } from './../../domain/entity/planet.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetController } from './controllers/planet.controller';
import { MeetingService } from './services/meeting.service';
import { PlanetService } from './services/planet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Planet, Meeting])],
  controllers: [PlanetController],
  providers: [MeetingService, PlanetService],
})
export class PlanetModule {}
