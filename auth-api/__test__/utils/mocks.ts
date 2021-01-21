import { ITraveler } from './../../src/app/auth/interfaces/traveler';
import { LoginUserDto } from './../../src/app/auth/dto/login-user.dto';

import * as bcrypt from 'bcryptjs';

export class MocksForTest {
  static getFormLogin(): LoginUserDto {
    const formLogin = new LoginUserDto();
    formLogin.setLogin('email1@testgmail.com');
    formLogin.setPassword('987654321');
    return formLogin;
  }

  static getPasswordIncrypt(): string {
    return bcrypt.hashSync('987654321', 8);
  }

  static getTraveler(): ITraveler[] {
    return [
      {
        id: 1,
        avatar: 1,
        email: 'email1@testgmail.com',
        jwt: 'anyToken',
        nickName: 'vitorvlw',
        password: this.getPasswordIncrypt(),
        planet: 1,
      },
    ];
  }
}
