import { Injectable, Provider } from "@nestjs/common";
import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repository/ICategoryRepository";
import { CategoryDomainToEntity } from "../mappers/CategoryMapper";
import { CategoryService } from "../services/CategoryService";

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(private service: CategoryService) {}
  
  async create(category: Category): Promise<Category> {
    return await this.service.create(CategoryDomainToEntity(category));
  }
  
  async findById(id: string): Promise<Category> {
    return await this.findById(id);
  }
  
  async getTree(): Promise<Category[]> {
    return await this.service.findTree();
  }
}

export const CategoryRepoProvider: Provider = {
  provide: 'CategoryRepo',
  useClass: CategoryRepository,
};
