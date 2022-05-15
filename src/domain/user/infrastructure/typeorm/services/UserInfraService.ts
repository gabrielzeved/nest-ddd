import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceBase } from 'src/base/ServiceBase';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/User.entity';

@Injectable()
export class UserInfraService extends ServiceBase<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {
    super(userRepo);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        email,
      },
    });
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        username,
      },
    });
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.add(user);
  }
}
