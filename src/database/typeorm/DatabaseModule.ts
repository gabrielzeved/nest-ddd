import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || 'admin',
      database: process.env.DATABASE_NAME || 'test',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: false,
      migrationsTableName: 'custom_migration_table',
      migrations: ['./migrations/*.js'],
      cli: {
        migrationsDir: './migrations',
      },
    }),
  ],
})
export class DatabaseModule {}
