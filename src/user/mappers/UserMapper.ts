import { User } from '../domain/entities/User';
import { UserEntity } from '../infrastructure/typeorm/entities/User.entity';

export function UserEntityToDomain(entity: UserEntity) {
  let domain = new User({ ...entity }, entity.id);
  return domain;
}

export function UserDomainToEntity(user: User) {
  let entity = new UserEntity();
  entity = Object.assign({}, entity, user);
  return entity;
}
