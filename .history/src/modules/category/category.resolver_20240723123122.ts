import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { SubCategoryService } from '../sub-category/sub-category.service';
import { SubCategory } from '../sub-category/entities/sub-category.entity';
import { BaseResolver } from 'src/common/graphql/base.resolver';

@Resolver(() => Category)
export class CategoryResolver extends BaseResolver(Category) {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly subCategoryService: SubCategoryService,
  ) {
    super();
  }

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }

  @ResolveField(() => [SubCategory])
  subCategories(@Parent() category: Category) {
    return this.subCategoryService.findByCategoryId(category.id);
  }
}
