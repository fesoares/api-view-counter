import * as mongoose from 'mongoose';

export const CounterSchema = new mongoose.Schema({
  created_at: { type: Date, required: true },
});

export interface Counter {
  id: string;
  created_at: Date;
}
