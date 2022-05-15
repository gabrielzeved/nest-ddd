import { EntityBase } from "../../../base/EntityBase";

export class Category extends EntityBase<Category>{

  name: string;
  parent ?: Category;
  children : Category[]
  url: string;

  constructor(
    props: Omit<Category, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }

}