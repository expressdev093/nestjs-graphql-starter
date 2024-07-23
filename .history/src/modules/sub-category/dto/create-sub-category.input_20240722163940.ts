import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSubCategoryInput {
  @Field(() => String, { description: 'Title of the sub-category' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, { description: 'Description of the sub-category' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => Boolean, { description: 'Status of the sub-category' })
  @IsBoolean()
  status: boolean;

  @Field(() => Int)
  @IsNumber()
  categoryId: number;
}
