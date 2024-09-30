import { Test, TestingModule } from '@nestjs/testing';
import { NuevoService } from './nuevo.service';

describe('NuevoService', () => {
  let service: NuevoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NuevoService],
    }).compile();

    service = module.get<NuevoService>(NuevoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
