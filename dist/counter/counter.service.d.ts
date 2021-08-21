import { Counter } from './counter.model';
import { Model } from 'mongoose';
export declare class CounterService {
    private readonly counterModel;
    constructor(counterModel: Model<Counter>);
    getAll(): Promise<Counter[]>;
    create(doc: Counter): Promise<any>;
}
