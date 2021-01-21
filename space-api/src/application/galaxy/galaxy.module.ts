import { Galaxy } from '../../domain/entity/galaxy.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalaxyController } from './controllers/galaxy.controller';
import { GalaxyService } from './services/galaxy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Galaxy])],
  controllers: [GalaxyController],
  providers: [GalaxyService],
})
export class GalaxyModule {}
