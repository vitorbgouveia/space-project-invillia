import { Injectable } from '@nestjs/common';

import { Pipeline } from '../pipeline/pipeline';
import { checkToken } from '../pipeline/pipes/check-token.pipeline';

@Injectable()
export class AuthService {
  constructor() {}

  /*
    Função executa em qualquer requisição vinda do ambiente externo,
    logo a api irá filtrar de acordo com um conjunto de passos(pipes)
    logo na entrada as requisições não autorizadas.
  */
  async executeAuthPipeline(req) {
    const pipeline = new Pipeline();

    pipeline.addPipe(checkToken);

    return pipeline.processPipe(req);
  }
}
