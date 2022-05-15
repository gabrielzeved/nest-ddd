import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/AuthModule';
import { DatabaseModule } from './database/DatabaseModule';
import { UserApplicationModule } from './domain/user/application/UserApplicationModule';

@Module({
  imports: [DatabaseModule, UserApplicationModule, AuthModule],
})
export class AppModule {}
