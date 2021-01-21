import { SharedService } from './../../services/shared.service';
import { HttpService, UnauthorizedException } from '@nestjs/common';

export const checkToken = async req => {
  const sharedService = new SharedService(new HttpService());

  // Consulta se o usuario da requisição é válido e existe
  return await sharedService
    .requestService(req, 'GET', 'http://auth-api:3000/profile/auth', null)
    .then(result => result.data)
    .catch(err => {
      throw new UnauthorizedException(err.data);
    });
};
