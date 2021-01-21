import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  login: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  public setLogin(login: string): LoginUserDto {
    this.login = login;
    return this;
  }

  public setPassword(password: string): LoginUserDto {
    this.password = password;
    return this;
  }
}
