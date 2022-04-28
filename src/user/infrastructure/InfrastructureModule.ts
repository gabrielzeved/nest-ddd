import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/entities/User.entity';
import { UserRepoProvider } from './typeorm/repository/UserRepositoryProvider';
import { UserInfraService } from './typeorm/services/UserInfraService';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepoProvider, UserInfraService],
  exports: [UserRepoProvider, UserInfraService],
})
export class InfrastructureModule {}
