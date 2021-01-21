import { AbstractService } from './../../../shared/services/abstract.service';
import { LoginUserDto } from 'src/app/auth/dto/login-user.dto';
import { Injectable } from '@nestjs/common';
import { ITraveler } from '../interfaces/traveler';

@Injectable()
export class TravelerService extends AbstractService {
  getTraveler(token, loginUserDto: LoginUserDto): Promise<ITraveler[]> {
    return this.requestToSpace(
      token,
      'GET',
      'http://space-api:3000/traveler',
      null,
      `?email=${loginUserDto.login}`,
    )
      .then((response: { data: ITraveler[] }) => response.data)
      .catch(err => {
        throw err;
      });
  }
}
