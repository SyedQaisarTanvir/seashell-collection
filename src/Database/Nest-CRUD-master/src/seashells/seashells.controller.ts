import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Seashell } from './entities/seashell.entity';
import { SeashellsService } from './seashells.service';

@Controller('seashells')
export class SeashellsController {
  constructor(private readonly seashellsService: SeashellsService) {}

  @Post()
  async create(@Body() seashell: Seashell): Promise<Seashell> {
    return await this.seashellsService.create(seashell);
  }

  @Get()
  async findAll(): Promise<Seashell[]> {
    return await this.seashellsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Seashell> {
    return await this.seashellsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() seashell: Seashell): Promise<any> {
    return await this.seashellsService.update(+id, seashell);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.seashellsService.remove(+id);
  }
}
