import { Product } from "../entities/Product";

export interface IProductRepository{
  findById(id: string) : Promise<Product>;
  create(product: Product) : Promise<Product>;
}