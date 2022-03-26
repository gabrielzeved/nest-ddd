import { User } from '../entities/User';

export interface IUserService {
  create(user: Omit<User, 'id'>): Promise<User>;
}
