import { Test, TestingModule } from '@nestjs/testing';
import { UserLevelStatService } from './user_level_stat.service';

describe('UserLevelStatService', () => {
  let service: UserLevelStatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLevelStatService],
    }).compile();

    service = module.get<UserLevelStatService>(UserLevelStatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
