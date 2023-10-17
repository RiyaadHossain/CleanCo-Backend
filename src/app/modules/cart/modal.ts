import { Schema, Types, model } from 'mongoose';
import { ICart } from './interface';

const cartSchema = new Schema<ICart>(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    service: { type: Types.ObjectId, ref: 'CleaningService', required: true }
  },
  { timestamps: true }
);

export const Cart = model<ICart>('Cart', cartSchema);
