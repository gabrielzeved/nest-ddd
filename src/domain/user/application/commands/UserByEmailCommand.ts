import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../auth/shared/AuthGuard';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import { GetUserByEmailDTO } from '../../dtos/GetUserByEmailDTO';
import { UserException } from '../../dtos/UserExceptions';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserByEmailCommand {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async userByEmail(dto: GetUserByEmailDTO) {
    const user = await this.userRepository.findByEmail(dto.email);
    
    if (!user) {
      throw new UserException.DoesNotExists();
    }

    return user;
  }
}
