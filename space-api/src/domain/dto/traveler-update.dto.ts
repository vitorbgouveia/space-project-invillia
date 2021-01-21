import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';
import { Planet } from '../entity/planet.entity';

export class TravelerUpdateDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  nickName?: string;

  @IsString()
  @Length(0, 120)
  @IsOptional()
  @ApiProperty()
  email?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  avatar?: number;

  @IsString()
  @Length(0, 255)
  @IsOptional()
  @ApiProperty()
  password?: string;

  @ApiProperty()
  jwt?: string;

  @ApiProperty()
  planet: Planet | Partial<Planet>;
}
