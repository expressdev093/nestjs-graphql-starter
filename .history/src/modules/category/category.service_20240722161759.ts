import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryInput: CreateCategoryInput) {
    const newCategory = this.categoryRepository.create(createCategoryInput);
    return await this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    const category = await this.findOne(id);
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    this.categoryRepository.merge(category, updateCategoryInput);
    const updatedCategory = await this.categoryRepository.save(category);
    return updatedCategory;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
