import { Injectable } from '@nestjs/common';
import Elastic from './services/elastic';
@Injectable()
export class AppService {
  async getElasticSearch(): Promise<any[]> {
    const { body: { hits: { hits }} }  = await Elastic.search({
      index: 'teste_index',
      body: {
        query: {
          match_all: { }
        }
      }
    });

    return hits;
  }
}
