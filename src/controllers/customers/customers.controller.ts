import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getCategories(@Param('id') id: string) {
    return {
      message: `customers ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear en customers',
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
