import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

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
  categoryId: number;
}
