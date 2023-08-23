import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [ChapterController],
  imports: [PrismaModule],
  providers: [ChapterService],
})
export class ChapterModule {}
