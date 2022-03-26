import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class InfrastructureModule {}
