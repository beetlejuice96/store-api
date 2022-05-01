import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //quita los atributos que no esten definidos en el dto.
      forbidNonWhitelisted: true, // retorna badrequest y avisa que se estan enviando parametros incorrectos.
    }),
  );
  await app.listen(3000);
}
bootstrap();
