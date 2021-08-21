import * as mongoose from 'mongoose';
export declare const CounterSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<mongoose.Document<any, any, any>, any, any>, undefined, {}>;
export interface Counter {
    id: string;
    type: string;
    created_at: Date;
}
