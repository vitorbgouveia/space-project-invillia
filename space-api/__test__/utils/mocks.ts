import { IPlanet } from './../../src/domain/interfaces/planet';
import { IngressMeetingDto } from './../../src/domain/dto/ingress-meeting.dto';
import { ITraveler } from './../../src/domain/interfaces/traveler';

export class MocksForTest {
  static getTraveler(): ITraveler[] {
    return [
      {
        avatar: 1,
        nickName: 'chegandoIvillia',
        email: 'temquerespeitar@invillia.com',
        planet: { id: 1 },
        password: 'vouConseguir',
      },
    ];
  }

  static getFormIngressMeeting(): IngressMeetingDto {
    return {
      link: 'linkshow.com',
      traveler: { id: 1 },
      planet: { id: 1 },
    };
  }

  static getPlanets(): IPlanet[] {
    return [
      {
        galaxy: { id: 1 },
        name: 'teste',
      },
    ];
  }
}
