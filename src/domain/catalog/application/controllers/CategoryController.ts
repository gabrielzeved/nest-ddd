import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { CreateCategoryCommand } from "../commands/category/CreateCategoryCommand";
import { GetCategoryTreeCommand } from "../commands/category/GetCategoryTreeCommand";


@Controller('categories')
export class CategoryController{

  constructor(
    private readonly createCategory : CreateCategoryCommand,
    private readonly getCategoryTree : GetCategoryTreeCommand
  ){}

  @Post()
  async create(@Body() createDTO : CreateCategoryDTO){
    return this.createCategory.create(createDTO);
  }

  @Get('tree')
  async getTree(){
    return this.getCategoryTree.getTree()
  }

}