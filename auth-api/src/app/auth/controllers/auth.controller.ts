import {
  Controller,
  Body,
  Post,
  Req,
  UseGuards,
  Res,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LoginService } from '../services/login.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import LoginResponseDTO from '../dto/login-response.dto';

@ApiTags('Login')
@Controller()
export class AuthController {
  constructor(private loginService: LoginService) {}

  @Get('profile')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  public async profile(@Res() res, @Req() req): Promise<JwtPayload> {
    return res.status(HttpStatus.OK).json({ payload: req.user.payload });
  }

  @Get('profile/auth')
  @ApiBearerAuth()
  public async profileAuth(@Res() res, @Req() req): Promise<JwtPayload> {
    return res.status(HttpStatus.OK).json();
  }

  @Post('auth')
  public async login(
    @Body() loginUserDto: LoginUserDto,
    @Res() res,
  ): Promise<LoginResponseDTO> {
    return res
      .status(HttpStatus.OK)
      .json(await this.loginService.login(loginUserDto));
  }

  @Post('logout')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  public async logout(@Res() res, @Req() req): Promise<void> {
    return res.status(HttpStatus.OK).json(await this.loginService.logout(req));
  }
}
