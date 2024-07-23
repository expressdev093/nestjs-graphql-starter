import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/modules/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'sub-categories' })
export class SubCategory {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Title of the sub-category' })
  @Column()
  title: string;

  @Field(() => String, { description: 'Description of the sub-category' })
  @Column()
  description: string;

  @Field(() => Boolean, { description: 'Status of the sub-category' })
  @Column()
  status: boolean;

  @Column()
  @Field(() => Int)
  categoryId: number;

  @JoinColumn({ name: '' })
  @JoinColumn({ name: '' })
  @ManyToOne(() => Category, (category) => category.subCategories)
  @Field(() => Category)
  category: Category;
}
