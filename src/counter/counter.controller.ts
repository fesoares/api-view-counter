import { Body, Controller, Get, Post } from '@nestjs/common';
import { CounterService } from './counter.service';
import { Counter } from './counter.model';

@Controller('counter')
export class CounterController {
  constructor(private service: CounterService) {}

  @Get()
  async getAll() {
    const responses = await this.service.getAll();
    return `views: ${responses.views.length} | clicks: ${responses.clicks.length}`;
  }

  @Post('create')
  create(@Body() counter: Counter) {
    return this.service.create(counter);
  }
}
