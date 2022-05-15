import { v4 } from 'uuid';

export abstract class EntityBase<T> {
  created_at: Date;
  updated_at: Date;
  constructor(props: Partial<Omit<T, 'id'>>, private id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = v4();
    }
  }
}
