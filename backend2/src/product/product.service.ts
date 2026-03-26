import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDokument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDokument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    const foundedProduct = await this.productModel.findById(id);
    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }
    return foundedProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const foundedProduct = await this.productModel.findById(id);
    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }
    return await this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  async remove(id: string) {
    const foundedProduct = await this.productModel.findById(id);
    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }
    return await this.productModel.findByIdAndDelete(id);
  }
}
