import { Inject, Injectable } from "@nestjs/common";
import { CategoryException } from "../../../dtos/CategoryException";
import { CreateCategoryDTO } from "../../../dtos/CreateCategoryDTO";
import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repository/ICategoryRepository";


const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class GetCategoryTreeCommand {
  constructor(@CategoryRepo() private readonly repository: ICategoryRepository) {}

  public async getTree(){
    return this.repository.getTree();
  }

}