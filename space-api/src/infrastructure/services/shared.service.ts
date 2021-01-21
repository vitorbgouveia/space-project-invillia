import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  constructor(protected httpService: HttpService) {}

  /*
   Ao utilizar essa função a api garante que em quaisquer requisições
   feitas para o ambiente externo seja enviado o token.
  */
  async requestService(req, method, url, data = null, headers = null) {
    return await this.httpService
      .request({
        method,
        url,
        data,
        headers: headers
          ? headers
          : {
              'Content-Type': 'application/json',
              Authorization: req.headers.authorization,
            },
      })
      .toPromise()
      .catch((e: any) => {
        throw e;
      });
  }

  /*
    Nessa função ele irá consultar todas as propriedades "unique" de um objeto
    passado para cadastro e verificar e no banco de dados já possui
    um valor igual ao da propriedade, caso possua retorna um erro.
  */
  async validUniqueColumn(repository: any, form) {
    for (const uniqueMetadata of repository.metadata.uniques) {
      const nameProp = uniqueMetadata.givenColumnNames[0];
      if (await repository.findOne({ [`${nameProp}`]: form[`${nameProp}`] })) {
        throw new Error(`Value of ${nameProp} already exists`);
      }
    }
  }
}
