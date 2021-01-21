import { Meeting } from '../../../domain/entity/meeting.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IngressMeetingDto } from 'src/domain/dto/ingress-meeting.dto';

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private repository: Repository<Meeting>,
  ) {}

  async ingressMeeting(form: IngressMeetingDto) {
    if (
      await this.repository.findOne({
        traveler: form.traveler,
        link: form.link,
      })
    ) {
      throw new HttpException(
        'traveler is already at the meeting',
        HttpStatus.CONFLICT,
      );
    }
    return await this.repository.save({
      link: form.link,
      planet: form.planet,
      traveler: form.traveler,
    });
  }

  async searchMeeting(req: any) {
    const where = {};
    for (const [field, value] of Object.entries(req.query)) {
      where[`${field}`] = value;
    }

    return await this.repository.find({ where });
  }
}
