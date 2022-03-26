import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../domain/repository/IUserRepository';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

const UserRepo = () => Inject('UserRepository');

@Injectable()
export class Create {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async create(user: CreateUserDTO) {
    if (this.userRepository.findByEmail(user.email)) {
      throw new Error('');
    }
    await this.userRepository.create(user);
  }
}
