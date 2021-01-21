import { TravelerUpdateDto } from './../../../domain/dto/traveler-update.dto';
import { TravelerDto } from './../../../domain/dto/traveler.dto';
import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  HttpStatus,
  Get,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TravelerService } from '../services/traveler.service';

@ApiTags('traveler')
@Controller('traveler')
export class TravelerController {
  constructor(private service: TravelerService) {}

  @Post('create')
  create(@Body() form: TravelerDto, @Res() res: any) {
    return this.service
      .create(form)
      .then(newTraveler => res.status(HttpStatus.CREATED).json(newTraveler))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to create a traveler`, data: err }),
      );
  }

  @Patch(':id')
  update(
    @Body() form: TravelerUpdateDto,
    @Param('id') id: number,
    @Res() res: any,
  ) {
    return this.service
      .update(id, form)
      .then(newTraveler => res.status(HttpStatus.OK).json(newTraveler))
      .catch(err => {
        console.log(err);
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to update a traveler`, data: err });
      });
  }

  @Get('')
  searchTraveler(
    @Query('page') page: number,
    @Query('size') size: number,
    @Req() req: any,
    @Res() res: any,
  ) {
    return this.service
      .searchTraveler(req, page, size)
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to search a traveler`, data: err }),
      );
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Req() req: any, @Res() res: any) {
    return this.service
      .delete(id)
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to remove a traveler`, data: err }),
      );
  }
}
