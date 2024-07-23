import { ObjectType } from '@nestjs/graphql';
import { SubCategory } from 'src/modules/sub-category/entities/sub-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subCategories?: SubCategory[];
}
