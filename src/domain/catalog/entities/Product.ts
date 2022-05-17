import {EntityBase} from '../../../base/EntityBase';
import { Category } from './Category';
import { SKU } from './SKU';

export class Product extends EntityBase<Product> {

  name: string;
  description?: string;
  items: SKU[]
  category ?: Category

  constructor(
    props: Omit<Product, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }
}
