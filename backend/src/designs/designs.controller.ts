import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DesignsService } from './designs.service.js';
import { CreateDesignDto } from './dto/create-design.dto.js';
import { UpdateDesignDto } from './dto/update-design.dto.js';

@Controller('designs')
export class DesignsController {
  constructor(private readonly designsService: DesignsService) {}

  @Get()
  findAll() {
    return this.designsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designsService.findOne(id);
  }

  @Post()
  create(@Body() createDesignDto: CreateDesignDto) {
    return this.designsService.create(createDesignDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDesignDto: UpdateDesignDto,
  ) {
    return this.designsService.update(id, updateDesignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designsService.remove(id);
  }
}