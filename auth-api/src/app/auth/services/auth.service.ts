import { IReturnCreateToken } from './../interfaces/auth';
import { ITraveler } from './../interfaces/traveler';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AbstractService } from '../../../shared/services/abstract.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    public abstractService: AbstractService,
  ) {}

  /**
   * Metódo que o guard do auth irá chamar para validar usuário logado baseado no jwt
   */
  async validateUser(
    payload: JwtPayload,
  ): Promise<{ traveler: ITraveler; payload: JwtPayload }> {
    const token = this.createToken({ userInfo: payload.userInfo });

    const resultTraveler = (
      await this.abstractService.requestToSpace(
        token.accessToken,
        'GET',
        'http://space-api:3000/traveler',
        null,
        `?email=${payload.userInfo.email}`,
      )
    ).data as ITraveler[];

    if (resultTraveler.length === 0 || !resultTraveler[0].jwt) {
      throw new UnauthorizedException('Invalid token');
    }

    const traveler = resultTraveler[0];
    return Object.assign({}, { traveler, payload });
  }

  createToken(payload, expiresIn = process.env.EXPIRESIN): IReturnCreateToken {
    payload.iss = process.env.JWT_ISSUE;

    const accessToken = this.jwtService.sign(payload, { expiresIn });

    return { expiresIn, accessToken };
  }
}
