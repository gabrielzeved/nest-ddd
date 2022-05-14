import { Module } from '@nestjs/common';
import { AuthModule } from './auth/AuthModule';
import { DatabaseModule } from './database/DatabaseModule';
import { UserApplicationModule } from './user/application/UserApplicationModule';

@Module({
  imports: [DatabaseModule, UserApplicationModule, AuthModule],
})
export class AppModule {}
