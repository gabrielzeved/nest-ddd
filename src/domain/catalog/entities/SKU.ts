import { EntityBase } from "../../../base/EntityBase";

export class SKU extends EntityBase<SKU>{

  name: string;
  variant: string;
  price: number;
  avaiableQuantity: number;

  constructor(
    props: Omit<SKU, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }

}