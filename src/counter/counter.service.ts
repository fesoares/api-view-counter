import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Counter } from './counter.model';
import { Model } from 'mongoose';

@Injectable()
export class CounterService {
  constructor(
    @InjectModel('Counter') private readonly counterModel: Model<Counter>,
  ) {}

  async create(doc: Counter) {
    const result = await new this.counterModel(doc).save();
    return result.id;
  }

  async getAll(): Promise<Counter[]> {
    const result = await this.counterModel.find().exec();
    return result;
  }
}
