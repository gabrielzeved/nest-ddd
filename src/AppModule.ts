import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/DatabaseModule';
import { UserApplicationModule } from './user/application/UserApplicationModule';

@Module({
  imports: [DatabaseModule, UserApplicationModule],
})
export class AppModule {}
