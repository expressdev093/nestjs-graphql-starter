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
    return `This action returns all subCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategory`;
  }

  update(id: number, updateSubCategoryInput: UpdateSubCategoryInput) {
    return `This action updates a #${id} subCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategory`;
  }
}
