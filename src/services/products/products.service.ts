import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { Product } from '../../entities/product.entity';
@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counter++;
    const newProduct = {
      id: this.counter,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    let productFinded = this.products.find((p) => p.id === id);
    if (!productFinded) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    productFinded = {
      ...productFinded,
      ...payload,
    };
    const productIndex = this.products.indexOf(productFinded);
    this.products[productIndex] = productFinded;
    return productFinded;
  }

  delete(id: number) {
    const productFinded = this.products.find((p) => p.id === id);
    if (!productFinded) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    const productIndex = this.products.indexOf(productFinded);
    this.products.splice(productIndex, 1);
    return true;
  }
}
