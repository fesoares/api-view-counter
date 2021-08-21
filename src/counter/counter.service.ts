import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Counter } from './counter.model';
import { Model } from 'mongoose';

@Injectable()
export class CounterService {
  constructor(
    @InjectModel('Counter') private readonly counterModel: Model<Counter>,
  ) {}

  async getAll() {
    const views = await this.counterModel.find({ type: 'view' }).exec();
    const clicks = await this.counterModel.find({ type: 'click' }).exec();
    return { views, clicks };
  }

  async create(doc: Counter) {
    const result = await new this.counterModel(doc).save();
    return result.id;
  }
}
