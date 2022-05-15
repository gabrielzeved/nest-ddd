import { EntityBase } from '../../../../base/EntityBase';

export class User extends EntityBase<User> {
  username: string;
  password: string;
  avatar: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    props: Omit<User, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    super(props, id);
  }
}
