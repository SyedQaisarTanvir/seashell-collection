import { Test, TestingModule } from '@nestjs/testing';
import { SeashellsController } from './seashells.controller';
import { SeashellsService } from './seashells.service';

describe('SeashellsController', () => {
  let controller: SeashellsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeashellsController],
      providers: [SeashellsService],
    }).compile();

    controller = module.get<SeashellsController>(SeashellsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
