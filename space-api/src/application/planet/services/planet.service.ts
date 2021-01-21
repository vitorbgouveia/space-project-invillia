import { Planet } from './../../../domain/entity/planet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet)
    private repository: Repository<Planet>,
  ) {}

  async searchPlanet() {
    return await this.repository.find();
  }
}
