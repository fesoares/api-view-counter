import { CounterService } from './counter.service';
import { Counter } from './counter.model';
export declare class CounterController {
    private service;
    constructor(service: CounterService);
    getAll(): Promise<number>;
    create(counter: Counter): Promise<any>;
}
