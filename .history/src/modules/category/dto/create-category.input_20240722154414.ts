import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'Title of the category' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, { description: 'Description of the category' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => Boolean, { description: 'Status of the category' })
  @IsString()
  @IsNotEmpty()
  status: boolean;
}
