import { Module } from "@nestjs/common";
import { CategoryInfrastructureModule } from "../infrastructure/CatalogInfrastructureModule";
import { CreateCategoryCommand } from "./commands/category/CreateCategoryCommand";
import { CategoryController } from "./controllers/CategoryController";


@Module({
  imports: [CategoryInfrastructureModule],
  providers: [CategoryInfrastructureModule, CreateCategoryCommand],
  exports: [CategoryInfrastructureModule, CreateCategoryCommand],
  controllers: [CategoryController]
})
export class CatalogApplicationModule {}