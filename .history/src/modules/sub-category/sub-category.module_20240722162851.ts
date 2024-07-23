import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryResolver } from './sub-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entities/sub-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoryResolver, SubCategoryService],
})
export class SubCategoryModule {}
