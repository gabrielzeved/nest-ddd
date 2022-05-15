import { Column, CreateDateColumn, Entity, PrimaryColumn, Tree, TreeChildren, TreeParent, UpdateDateColumn } from "typeorm";

@Entity({name: 'categories'})
@Tree('closure-table')
export class CategoryEntity{
  @PrimaryColumn({type: 'varchar'})
  id: string;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'varchar'})
  url: string;

  @TreeChildren()
  children: CategoryEntity[]

  @TreeParent()
  parent: CategoryEntity

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}