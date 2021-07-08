import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Queue from './services/queue';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Queue.start();
  await app.listen(3000);
}
bootstrap();
