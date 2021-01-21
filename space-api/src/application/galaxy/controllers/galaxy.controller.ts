import {
  Controller,
  Get,
  Res,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GalaxyService } from '../services/galaxy.service';

@ApiTags('Galaxy')
@Controller('galaxy')
export class GalaxyController {
  constructor(private service: GalaxyService) {}

  @Get('')
  searchGalaxy(@Res() res: any) {
    return this.service
      .searchGalaxy()
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err => {
        throw new BadRequestException(err);
      });
  }
}
