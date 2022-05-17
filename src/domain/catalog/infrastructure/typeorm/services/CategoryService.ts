import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, TreeRepository } from "typeorm";
import { ServiceBase } from "../../../../../base/ServiceBase";
import { CategoryEntity } from "../entities/Category.entity";

@Injectable()
export class CategoryService extends ServiceBase<CategoryEntity> {
  
  constructor(
    @InjectRepository(CategoryEntity)
    readonly repo: TreeRepository<CategoryEntity>,
  ) {
    super(repo);
  }

  async findTree(depth ?: number){
    return await this.repo.findTrees({
      depth,
      relations: ['children']
    })
  }

  async create(user: CategoryEntity){
    return await this.add(user);
  }

}