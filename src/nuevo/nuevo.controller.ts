import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NuevoService } from './nuevo.service';
import { CreateNuevoDto } from './dto/create-nuevo.dto';
import { UpdateNuevoDto } from './dto/update-nuevo.dto';

@Controller('nuevo')
export class NuevoController {
  constructor(private readonly nuevoService: NuevoService) {}

  @Post()
  create(@Body() createNuevoDto: CreateNuevoDto) {
    return this.nuevoService.create(createNuevoDto);
  }

  @Get()
  findAll() {
    return this.nuevoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nuevoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNuevoDto: UpdateNuevoDto) {
    return this.nuevoService.update(+id, updateNuevoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nuevoService.remove(+id);
  }
}
