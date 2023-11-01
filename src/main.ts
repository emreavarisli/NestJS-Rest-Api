import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Veri tipi degisimi yapabilmemiz icin aktif edildi.
      disableErrorMessages: false, // Hata mesajlarinda anlamli metin donmesini saglar/
      whitelist: true, // Whitelist acmazsak asagidaki iki kurali kullanamayiz.
      forbidNonWhitelisted: true, //  Alttaki kurali yazmama izin veriyor
      forbidUnknownValues: true, // POST,GET,PATCH,DELETE bilinmeyten deger gelmesini engelller.
    })
  )
  await app.listen(3000);
}
bootstrap();
