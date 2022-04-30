import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 10,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products , limit: ${limit}, offset: ${offset}, brand: ${brand}`,
    // };
    return this.productService.findAll();
  }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: string) {
    // return {
    //   message: `product ${id}`,
    // };
    //TODO: REFACTORIZAR PARA NO TENER QUE USAR EL PLUS
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload: payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Partial<CreateProductDto>,
  ) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
