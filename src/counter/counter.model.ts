import * as mongoose from 'mongoose';

export const CounterSchema = new mongoose.Schema({
  created_at: { type: Date, required: true },
  type: { type: String, required: true },
});

export interface Counter {
  id: string;
  type: string;
  created_at: Date;
}
