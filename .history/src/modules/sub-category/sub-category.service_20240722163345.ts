import { Injectable } from '@nestjs/common';
import { CreateSubCategoryInput } from './dto/create-sub-category.input';
import { UpdateSubCategoryInput } from './dto/update-sub-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/sub-category.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly repo: Repository<SubCategory>,
  ) {}
  async create(createSubCategoryInput: CreateSubCategoryInput) {
    const newCategory = this.repo.create(createSubCategoryInput);
    return await this.repo.save(newCategory);
  }

  findAll() {
    return this.repo.find();
  }
  async findOne(id: number) {
    return await this.repo.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateSubCategoryInput: UpdateSubCategoryInput) {
    const category = await this.findOne(id);
    if (!category) {
      throw new Error(`sub Category with id ${id} not found`);
    }
    this.repo.merge(category, updateSubCategoryInput);
    const updatedCategory = await this.repo.save(category);
    return updatedCategory;
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new Error(`Sub Category with id ${id} not found`);
    }
    return await this.repo.remove(category);
  }
}
