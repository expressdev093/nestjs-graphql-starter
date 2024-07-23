import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryResolver } from './sub-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entities/sub-category.entity';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory]), CategoryModule],
  providers: [SubCategoryResolver, SubCategoryService],
  exports: [SubCategoryService],
})
export class SubCategoryModule {}
