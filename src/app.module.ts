import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuevoModule } from './nuevo/nuevo.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';

@Module({
  imports: [NuevoModule, VehiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
