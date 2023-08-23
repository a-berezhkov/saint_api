import { Test, TestingModule } from '@nestjs/testing';
import { LevelContentController } from './level_content.controller';
import { LevelContentService } from './level_content.service';

describe('LevelContentController', () => {
  let controller: LevelContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelContentController],
      providers: [LevelContentService],
    }).compile();

    controller = module.get<LevelContentController>(LevelContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
