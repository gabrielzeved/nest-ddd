import { EntityBase } from '../../../base/EntityBase';

export class User extends EntityBase<User> {
  username: string;
  password: string;
  avatar: string;
  email: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    super(props, id);
  }
}
