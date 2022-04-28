import { Provider } from '@nestjs/common';
import { UserRepository } from './UserRepository';

export const UserRepoProvider: Provider = {
  provide: 'UserRepo',
  useClass: UserRepository,
};
