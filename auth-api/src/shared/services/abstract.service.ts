import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AbstractService {
  constructor(private httpService: HttpService) {}

  async requestToSpace(
    token,
    method: string | any,
    path = '',
    data = null,
    params = '',
  ) {
    return await this.httpService
      .request({
        method,
        url: `${path}${params}`,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .toPromise()
      .catch((e: any) => {
        throw e;
      });
  }
}
