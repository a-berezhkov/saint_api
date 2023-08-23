import { Test, TestingModule } from '@nestjs/testing';
import { LevelContentService } from './level_content.service';

describe('LevelContentService', () => {
  let service: LevelContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelContentService],
    }).compile();

    service = module.get<LevelContentService>(LevelContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
