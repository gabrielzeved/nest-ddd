import {EntityBase} from '../../../base/EntityBase';
import { SKU } from './SKU';

export class Product extends EntityBase<Product> {

  name: string;
  description?: string;
  items: SKU[]

  constructor(
    props: Omit<Product, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }
}
