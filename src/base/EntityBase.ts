import { v4 } from 'uuid';

export abstract class EntityBase<T> {
  constructor(props: Partial<Omit<T, 'id'>>, private id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = v4();
    }
  }
}
