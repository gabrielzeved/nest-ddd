import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDTO {
  @IsString()
  name: string;
  
  @IsString()
  url: string;

  @IsString()
  @IsOptional()
  parentId ?: string;
}