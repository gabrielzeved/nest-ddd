import { Module } from "@nestjs/common";
import { CategoryInfrastructureModule } from "../infrastructure/CatalogInfrastructureModule";
import { CreateCategoryCommand } from "./commands/category/CreateCategoryCommand";
import { GetCategoryTreeCommand } from "./commands/category/GetCategoryTreeCommand";
import { CategoryController } from "./controllers/CategoryController";


@Module({
  imports: [CategoryInfrastructureModule],
  providers: [
    CategoryInfrastructureModule, 
    CreateCategoryCommand,
    GetCategoryTreeCommand
  ],
  exports: [
    CategoryInfrastructureModule, 
    CreateCategoryCommand,
    GetCategoryTreeCommand
  ],
  controllers: [CategoryController]
})
export class CatalogApplicationModule {}