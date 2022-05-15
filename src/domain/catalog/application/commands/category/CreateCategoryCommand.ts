import { Inject, Injectable } from "@nestjs/common";
import { CategoryException } from "../../../dtos/CategoryException";
import { CreateCategoryDTO } from "../../../dtos/CreateCategoryDTO";
import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repository/ICategoryRepository";


const CategoryRepo = () => Inject('CategoryRepo');

@Injectable()
export class CreateCategoryCommand {
  constructor(@CategoryRepo() private readonly repository: ICategoryRepository) {}

  public async create(createDTO: CreateCategoryDTO){

    let parent = undefined;

    if(createDTO.parentId){
      parent = this.repository.findById(createDTO.parentId);

      if(!parent) throw new CategoryException.DoesNotExists();
    }

    return this.repository.create(new Category({
      ...createDTO,
      children: []
    }))
  }

}