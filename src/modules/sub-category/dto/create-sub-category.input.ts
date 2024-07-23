import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubCategoryInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  categoryId: number;
}
