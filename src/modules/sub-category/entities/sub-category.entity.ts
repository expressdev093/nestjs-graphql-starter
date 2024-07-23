import { ObjectType } from '@nestjs/graphql';
import { Category } from 'src/modules/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'sub-categories' })
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.subCategories)
  category: Category;
}
