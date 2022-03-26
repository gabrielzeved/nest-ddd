import { Inject, Injectable } from '@nestjs/common';
import {
  UserDomainToEntity,
  UserEntityToDomain,
} from 'src/user/mappers/UserMapper';
import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repository/IUserRepository';
import { UserService } from '../services/UserService';

@Injectable()
export class UserRepository implements IUserRepository {
  @Inject()
  private readonly userService: UserService;

  async findByEmail(email: string): Promise<User> {
    const userEntity = await this.userService.findByEmail(email);
    return UserEntityToDomain(userEntity);
  }

  async create(user: User): Promise<User> {
    const userEntity = await this.userService.add(UserDomainToEntity(user));
    return UserEntityToDomain(userEntity);
  }
}
