import { Category } from "../../../entities/Category";
import { CategoryEntity } from "../entities/Category.entity";

export function CategoryEntityToDomain(entity: CategoryEntity) {
  let domain = new Category({
    name: entity.name,
    url: entity.url,
    parent: CategoryDomainToEntity(entity.parent),
    children: entity.children.map((element) => CategoryDomainToEntity(element.parent))
  }, entity?.id);
  return domain;
}

export function CategoryDomainToEntity(category: Category) {
  let entity = new CategoryEntity();
  entity = Object.assign({}, entity, category);
  return entity;
}