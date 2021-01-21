import { JwtModule } from '@nestjs/jwt';
import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth/controllers/auth.controller';

import { AbstractService } from './../shared/services/abstract.service';
import { AuthService } from './auth/services/auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LoginService } from './auth/services/login.service';
import { TravelerService } from './auth/services/traveler.service';

require('dotenv').config();

@Module({
  imports: [
    HttpModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    LoginService,
    TravelerService,
    AbstractService,
  ],
})
export class AuthModule {}
