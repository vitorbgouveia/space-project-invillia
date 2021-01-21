import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [AuthModule],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
