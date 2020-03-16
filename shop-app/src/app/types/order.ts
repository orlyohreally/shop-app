import { Product } from '.';

export interface Order {
  _id: string;
  time: Date;
  products: Product[];
}
