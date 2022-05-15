import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/domain/entities/User';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import * as bcrypt from 'bcrypt';
import { UserException } from '../../dtos/UserExceptions';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserCreateCommand {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async create(createUserDTO: CreateUserDTO) {
    const user = await this.userRepository.findByEmail(createUserDTO.email);
    
    if (user) {
      throw new UserException.AlreadyExistsException();
    }

    const saltRounds = 10
    const hash = await bcrypt.hash(createUserDTO.password, saltRounds)
    
    await this.userRepository.create(new User(
      { 
        ...createUserDTO,
        password: hash 
      }
    ));
  }
}
