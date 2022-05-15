import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './typeorm/entities/Category.entity';
import { CategoryRepoProvider } from './typeorm/repository/CategoryRepository';
import { CategoryService } from './typeorm/services/CategoryService';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryRepoProvider, CategoryService],
  exports: [CategoryRepoProvider, CategoryService],
})
export class CategoryInfrastructureModule {}
