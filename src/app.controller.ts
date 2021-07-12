import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getElasticSearch(): Promise<AppService[]> {
    const data = await this.appService.getElasticSearch();
    
    return data;
  }
}
