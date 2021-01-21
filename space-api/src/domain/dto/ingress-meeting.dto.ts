import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Planet } from '../entity/planet.entity';
import { Traveler } from '../entity/traveler.entity';
export class IngressMeetingDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  planet: Planet | Partial<Planet>;

  @ApiProperty()
  link: string;

  @ApiProperty()
  traveler: Traveler | Partial<Traveler>;
}
