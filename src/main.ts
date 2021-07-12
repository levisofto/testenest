import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Queue from './services/queue';
import Elastic from './services/elastic';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Queue.start();
  await app.listen(3000);

  // Elastic.indices.create({
  //   index: 'teste_index',
  //   body: {
  //     "settings": {
  //       "number_of_shards": 1
  //     },
  //     "mappings": {
  //       "properties": {
  //         "message": { "type": "text" }
  //       }
  //     }
  //   }
  // }).catch((err) => console.log(err))
}
bootstrap();
