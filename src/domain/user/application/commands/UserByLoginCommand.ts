import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import { GetUserByLoginDTO } from '../../dtos/GetUserByLoginDTO';
import { UserException } from '../../dtos/UserExceptions';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserByLoginCommand {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async userByEmail(dto: GetUserByLoginDTO) {
    const user = await this.userRepository.findByUsername(dto.username);
    if (!user) {
      throw new UserException.DoesNotExists();
    }

    return user;
  }
}
