import { Counter } from './counter.model';
import { Model } from 'mongoose';
export declare class CounterService {
    private readonly counterModel;
    constructor(counterModel: Model<Counter>);
    getAll(): Promise<{
        views: (Counter & import("mongoose").Document<any, any, Counter>)[];
        clicks: (Counter & import("mongoose").Document<any, any, Counter>)[];
    }>;
    create(doc: Counter): Promise<any>;
}
