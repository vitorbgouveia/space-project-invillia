import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Planet } from '../entity/planet.entity';

export class TravelerDto {
  @ApiProperty()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nickName: string;

  @IsString()
  @Length(0, 120)
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  avatar: number;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  jwt?: string;

  @ApiProperty()
  @IsNotEmpty()
  planet: Planet | Partial<Planet>;
}
