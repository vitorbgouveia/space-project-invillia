import { IngressMeetingDto } from './../../../domain/dto/ingress-meeting.dto';
import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  Get,
  Req,
} from '@nestjs/common';
import { MeetingService } from '../services/meeting.service';
import { PlanetService } from '../services/planet.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Planet')
@Controller('planet')
export class PlanetController {
  constructor(
    private serviceMeeting: MeetingService,
    private servicePlanet: PlanetService,
  ) {}

  @Post('meeting/join')
  create(@Body() form: IngressMeetingDto, @Res() res: any) {
    this.serviceMeeting
      .ingressMeeting(form)
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to ingress meeting`, data: err }),
      );
  }

  @Get('meeting')
  searchMeeting(@Req() req: any, @Res() res: any) {
    this.serviceMeeting
      .searchMeeting(req)
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to search meeting`, data: err }),
      );
  }

  @Get('')
  searchPlanet(@Res() res: any) {
    this.servicePlanet
      .searchPlanet()
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(err =>
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `Fail to search planet`, data: err }),
      );
  }
}
