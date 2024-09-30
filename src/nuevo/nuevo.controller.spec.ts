import { Test, TestingModule } from '@nestjs/testing';
import { NuevoController } from './nuevo.controller';
import { NuevoService } from './nuevo.service';

describe('NuevoController', () => {
  let controller: NuevoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuevoController],
      providers: [NuevoService],
    }).compile();

    controller = module.get<NuevoController>(NuevoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
