import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Coords, getTime } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  //
  const config = new DocumentBuilder()
    .setTitle('Realtime tracking location app')
    .setDescription('The realtime tracking location description')
    .setVersion('1.0.0')
    .addTag('')
    .addBearerAuth()
    .build();

  //
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
