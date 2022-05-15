import { Category } from "../entities/Category";

export interface ICategoryRepository{
  getTree() : Promise<Category[]>
  findById(id: string) : Promise<Category>
  create(category: Category): Promise<Category>
}