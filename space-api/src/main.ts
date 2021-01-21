import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

import { AuthGuard } from './auth.guard';

import { AuthService } from './infrastructure/services/auth.service';

import helmet from 'helmet';
require('dotenv').config();

// Caso a infraestura das apis contenha a ELK o serviço já estará configurado com o apm da ELK
const apm = require('elastic-apm-node').start();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`API ${process.env.SERVICE_NICK_NAME}`)
    .setVersion('1.0')
    .addServer('/', 'For using on development')
    .addServer(
      `/services/${process.env.SERVICE_NAME}`,
      'For using on the kong gateway',
    )
    .setContact('Invillia', 'https://invillia.com', 'email@invillia.com')
    .build();

  app.useGlobalGuards(new AuthGuard(app.get(AuthService)));

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  await app
    .listen(3000)
    .then(() =>
      console.log(`Listen external port ${process.env.PORT_API_EXPOSE}`),
    );

  if (apm.isStarted()) {
    console.log('APM running');
  }
}
bootstrap();
