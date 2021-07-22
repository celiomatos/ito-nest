import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Area } from './area.entity';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @Get()
  findAll(): Promise<Area[]> {
    return this.areaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Area> {
    return this.areaService.findOne(id);
  }

  @Post()
  create(@Body() dto: Area): Promise<Area> {
    return this.areaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: Area): Promise<Area> {
    return this.areaService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.areaService.findOne(id);
  }
}
