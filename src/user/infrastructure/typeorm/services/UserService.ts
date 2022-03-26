import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/base/ServiceBase';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/User.entity';

@Injectable()
export class UserService extends ServiceBase<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {
    super(userRepo);
  }

  async findByEmail(email: string) {
    return await this.repo.findOne({
      where: {
        email,
      },
    });
  }
}
