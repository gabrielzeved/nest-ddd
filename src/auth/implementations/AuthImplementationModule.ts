import { Module, Provider } from '@nestjs/common';
import { UserByLoginCommand } from '../../user/application/commands/UserByLoginCommand';
import { UserInfrastructureModule } from '../../user/infrastructure/UserInfrastructureModule';
import { InternalAuth } from './InternalAuth/service/InternalAuth';

const AuthServiceProvider : Provider = {
  provide: 'AuthService',
  useClass: InternalAuth,
};

@Module({
  imports: [UserInfrastructureModule],
  providers: [InternalAuth, UserByLoginCommand, AuthServiceProvider],
  exports: [InternalAuth, UserByLoginCommand, AuthServiceProvider],
})
export class AuthImplementationModule {}
