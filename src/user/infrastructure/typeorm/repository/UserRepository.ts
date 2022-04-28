import { Injectable } from '@nestjs/common';
import {
  UserDomainToEntity,
  UserEntityToDomain,
} from 'src/user/infrastructure/typeorm/mappers/UserMapper';
import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repository/IUserRepository';
import { UserInfraService } from '../services/UserInfraService';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private userService: UserInfraService) {}

  async findByEmail(email: string): Promise<User> {
    const userEntity = await this.userService.findByEmail(email);
    if (!userEntity) return undefined;
    return UserEntityToDomain(userEntity);
  }

  async create(user: User): Promise<User> {
    const userEntity = await this.userService.add(UserDomainToEntity(user));
    return UserEntityToDomain(userEntity);
  }
}
