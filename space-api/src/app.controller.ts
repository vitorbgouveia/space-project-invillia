import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Controller()
export class AppController {
  @Get()
  getStatus(@Res() res: any) {
    if (getConnection().isConnected) {
      return res.status(200);
    }
    return res
      .status(HttpStatus.FAILED_DEPENDENCY)
      .json({ message: `Database communication failure!` });
  }
}
