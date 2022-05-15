import { Body, Controller, Post } from "@nestjs/common";
import { CreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { CreateCategoryCommand } from "../commands/category/CreateCategoryCommand";


@Controller('categories')
export class CategoryController{

  constructor(
    private readonly createCategory : CreateCategoryCommand
  ){}

  @Post()
  async create(@Body() createDTO : CreateCategoryDTO){
    return this.createCategory.create(createDTO);
  }

}