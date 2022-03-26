import { uuid } from 'uuidv4';

export abstract class EntityBase<T> {
  constructor(props: Omit<T, 'id'>, private id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
