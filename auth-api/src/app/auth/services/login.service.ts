import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AbstractService } from './../../../shared/services/abstract.service';
import { TravelerService } from './traveler.service';
import { AuthService } from './auth.service';

import * as bcrypt from 'bcryptjs';

import { LoginUserDto } from 'src/app/auth/dto/login-user.dto';
import LoginResponseDTO from '../dto/login-response.dto';
import { ITraveler } from '../interfaces/traveler';

@Injectable()
export class LoginService {
  constructor(
    public travelerService: TravelerService,
    public authService: AuthService,
    public abstractService: AbstractService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<LoginResponseDTO> {
    // Cria um token temporário para realizar a consulta do traveler na space-api
    const token = this.authService.createToken({ tempToken: '' }, '30');
    const traveler: ITraveler = (
      await this.travelerService.getTraveler(token, loginUserDto)
    )[0];

    await this.checkLogin(loginUserDto, traveler);

    return this.returnLoginResponseDto(traveler);
  }

  async checkLogin(
    loginUserDto: LoginUserDto,
    traveler: ITraveler,
  ): Promise<void> {
    if (!traveler) {
      throw new UnauthorizedException('User not found');
    }

    if (
      !(await this.comparePassword(loginUserDto.password, traveler.password))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  returnLoginResponseDto(traveler): Promise<LoginResponseDTO> {
    const token = this.authService.createToken({
      userInfo: {
        email: traveler.email,
        nickName: traveler.nickName,
        id: traveler.id,
      },
    });

    return this.abstractService
      .requestToSpace(
        token.accessToken,
        'PATCH',
        `http://space-api:3000/traveler/${traveler.id}`,
        { jwt: token.accessToken },
      )
      .then(() => {
        return new LoginResponseDTO()
          .setToken(token.accessToken)
          .setUserId(traveler.id)
          .setUserEmail(traveler.email)
          .setUserNickName(traveler.nickName);
      })
      .catch(err => {
        throw err;
      });
  }

  async logout({ user, ...req }): Promise<void> {
    await this.abstractService.requestToSpace(
      req.headers.Authorization,
      'PATCH',
      `http://space-api:3000/traveler/${user.payload.userInfo.id}`,
      { jwt: null },
    );
    return undefined;
  }

  public async comparePassword(
    passwordTextPlain: string,
    hashPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(passwordTextPlain, hashPassword);
  }
}
