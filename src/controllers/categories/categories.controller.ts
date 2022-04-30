import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `categorie ${id}, product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear en categories',
      payload: payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
