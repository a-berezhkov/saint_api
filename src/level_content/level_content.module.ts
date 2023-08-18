import { Module } from '@nestjs/common';
import { LevelContentService } from './level_content.service';
import { LevelContentController } from './level_content.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [LevelContentController],
  imports: [PrismaModule],
  providers: [LevelContentService],
})
export class LevelContentModule {}
