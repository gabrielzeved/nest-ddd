import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/InfrastructureModule';
import { UserCreateCommand } from './commands/UserCreateCommand';
import { UserController } from './controllers/UserController';

@Module({
  imports: [InfrastructureModule],
  providers: [UserCreateCommand],
  exports: [UserCreateCommand],
  controllers: [UserController],
})
export class UserApplicationModule {}
