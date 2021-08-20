import { Body, Controller, Get, Post } from '@nestjs/common';
import { CounterService } from './counter.service';
import { Counter } from './counter.model';

@Controller('counter')
export class CounterController {
  constructor(private service: CounterService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post('create')
  create(@Body() counter: Counter) {
    return this.service.create(counter);
  }
}
