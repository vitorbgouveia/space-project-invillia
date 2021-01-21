import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import Helmet from 'helmet';
require('dotenv').config();

// Caso a infraestura das apis contenha a ELK o serviço já estará configurado com o apm da ELK
const apm = require('elastic-apm-node').start();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Auth api')
    .setVersion('1.0')
    .addServer('/', 'For using on development')
    .addServer(
      `/services/${process.env.SERVICE_NAME}`,
      'For using on the kong gateway',
    )
    .setContact('Invillia', 'https://invillia.com', 'email@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.use(Helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app
    .listen(3000)
    .then(() => console.log(`Listen external port ${process.env.SERVER_PORT}`));

  if (apm.isStarted()) {
    console.log('APM running');
  }
}

bootstrap();
