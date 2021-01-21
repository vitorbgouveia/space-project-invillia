import { Galaxy } from '../../../domain/entity/galaxy.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GalaxyService {
  constructor(
    @InjectRepository(Galaxy)
    private repository: Repository<Galaxy>,
  ) {}

  async searchGalaxy() {
    return await this.repository
      .createQueryBuilder()
      .leftJoinAndSelect('Galaxy.planets', 'planet')
      .leftJoinAndSelect('planet.travelers', 'traveler')
      .getMany();
  }
}
