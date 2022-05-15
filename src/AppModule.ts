import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/AuthModule';
import { DatabaseModule } from './database/DatabaseModule';
import { UserApplicationModule } from './domain/user/application/UserApplicationModule';
import { CatalogApplicationModule } from './domain/catalog/application/CatalogApplicationModule';

@Module({
  imports: [DatabaseModule, UserApplicationModule, CatalogApplicationModule, AuthModule],
})
export class AppModule {}
