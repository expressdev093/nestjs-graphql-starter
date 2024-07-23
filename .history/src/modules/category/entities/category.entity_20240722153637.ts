import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
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
}
