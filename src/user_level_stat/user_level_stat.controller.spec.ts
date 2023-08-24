import { Test, TestingModule } from '@nestjs/testing';
import { UserLevelStatController } from './user_level_stat.controller';
import { UserLevelStatService } from './user_level_stat.service';

describe('UserLevelStatController', () => {
  let controller: UserLevelStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLevelStatController],
      providers: [UserLevelStatService],
    }).compile();

    controller = module.get<UserLevelStatController>(UserLevelStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
