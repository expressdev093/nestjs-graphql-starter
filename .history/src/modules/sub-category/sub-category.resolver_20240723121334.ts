import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SubCategoryService } from './sub-category.service';
import { SubCategory } from './entities/sub-category.entity';
import { CreateSubCategoryInput } from './dto/create-sub-category.input';
import { UpdateSubCategoryInput } from './dto/update-sub-category.input';
import { Category } from '../category/entities/category.entity';
import { CategoryService } from '../category/category.service';

@Resolver(() => SubCategory)
export class SubCategoryResolver {
  constructor(
    private readonly subCategoryService: SubCategoryService,
    private readonly categoryService: CategoryService,
  ) {}

  @Mutation(() => SubCategory)
  createSubCategory(
    @Args('createSubCategoryInput')
    createSubCategoryInput: CreateSubCategoryInput,
  ) {
    return this.subCategoryService.create(createSubCategoryInput);
  }

  @Query(() => [SubCategory], { name: 'subCategories' })
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Query(() => SubCategory, { name: 'subCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subCategoryService.findOne(id);
  }

  @Mutation(() => SubCategory)
  updateSubCategory(
    @Args('updateSubCategoryInput')
    updateSubCategoryInput: UpdateSubCategoryInput,
  ) {
    return this.subCategoryService.update(
      updateSubCategoryInput.id,
      updateSubCategoryInput,
    );
  }

  @Mutation(() => SubCategory)
  removeSubCategory(@Args('id', { type: () => Int }) id: number) {
    return this.subCategoryService.remove(id);
  }

  @ResolveField(() => Category)
  category(@Parent() subCategory: SubCategory) {
    return this.categoryService.findOne(subCategory.categoryId);
  }
}
