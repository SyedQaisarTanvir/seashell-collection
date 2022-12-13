import { Test, TestingModule } from '@nestjs/testing';
import { SeashellsService } from './seashells.service';

describe('SeashellsService', () => {
  let service: SeashellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeashellsService],
    }).compile();

    service = module.get<SeashellsService>(SeashellsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
