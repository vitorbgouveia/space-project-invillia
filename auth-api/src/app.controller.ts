import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Res() res: any): string {
    return res.status(HttpStatus.OK).json();
  }
}
