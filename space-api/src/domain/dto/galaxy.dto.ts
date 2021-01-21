import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { Planet } from '../entity/planet.entity';

export class GalaxyDto {
  @ApiProperty()
  id: number;

  @IsString()
  @Length(0, 60)
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  ordination: number;

  @ApiProperty()
  planets: Planet[];
}
