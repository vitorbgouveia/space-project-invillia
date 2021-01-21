import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Planet } from '../entity/planet.entity';
import { Traveler } from '../entity/traveler.entity';

export class PlanetDto {
  @ApiProperty()
  id: number;

  @IsString()
  @Length(0, 60)
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  galaxy: Planet;

  @ApiProperty()
  travelers: Traveler[];
}
