import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SubCategory } from 'src/modules/sub-category/entities/sub-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'categories' })
export class Category {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Title of the category' })
  @Column()
  title: string;

  @Field(() => String, { description: 'Description of the category' })
  @Column()
  description: string;

  @Field(() => Boolean, { description: 'Status of the category' })
  @Column()
  status: boolean;

  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subCategories: SubCategory[];
}
