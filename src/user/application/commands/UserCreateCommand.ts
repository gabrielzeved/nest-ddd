import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/user/domain/entities/User';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserCreateCommand {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async create(createUserDTO: CreateUserDTO) {
    const user = await this.userRepository.findByEmail(createUserDTO.email);
    if (user) {
      throw new Error('Usuário já registrado com o email fornecido');
    }
    await this.userRepository.create(new User({ ...createUserDTO }));
  }
}
