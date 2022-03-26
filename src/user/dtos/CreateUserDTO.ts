import { User } from '../domain/entities/User';

export interface CreateUserDTO extends Omit<User, 'id'> {}
