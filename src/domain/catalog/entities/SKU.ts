import { EntityBase } from "../../../base/EntityBase";
import { Product } from "./Product";

export class SKU extends EntityBase<SKU>{

  name: string;
  variant: string;
  price: number;
  avaiableQuantity: number;
  product: Product

  constructor(
    props: Omit<SKU, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }

}