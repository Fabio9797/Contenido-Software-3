import { Module } from '@nestjs/common';
import { NuevoService } from './nuevo.service';
import { NuevoController } from './nuevo.controller';

@Module({
  controllers: [NuevoController],
  providers: [NuevoService],
})
export class NuevoModule {}
