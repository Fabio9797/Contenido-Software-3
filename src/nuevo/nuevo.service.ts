import { Injectable } from '@nestjs/common';
import { CreateNuevoDto } from './dto/create-nuevo.dto';
import { UpdateNuevoDto } from './dto/update-nuevo.dto';

@Injectable()
export class NuevoService {
  create(createNuevoDto: CreateNuevoDto) {
    return 'This action adds a new nuevo';
  }

  findAll() {
    return `This action returns all nuevo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nuevo`;
  }

  update(id: number, updateNuevoDto: UpdateNuevoDto) {
    return `This action updates a #${id} nuevo`;
  }

  remove(id: number) {
    return `This action removes a #${id} nuevo`;
  }
}
