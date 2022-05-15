import { Module } from '@nestjs/common';
import { UserInfrastructureModule } from '../infrastructure/UserInfrastructureModule';
import { UserByEmailCommand } from './commands/UserByEmailCommand';
import { UserCreateCommand } from './commands/UserCreateCommand';
import { UserController } from './controllers/UserController';

@Module({
  imports: [UserInfrastructureModule],
  providers: [UserCreateCommand, UserByEmailCommand],
  exports: [UserCreateCommand, UserByEmailCommand],
  controllers: [UserController],
})
export class UserApplicationModule {}
