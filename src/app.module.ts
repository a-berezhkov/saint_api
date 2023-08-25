import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { LectureModule } from './lecture/lecture.module';
import { CourseModule } from './course/course.module';
import { ChapterModule } from './chapter/chapter.module';
import { LevelContentModule } from './level_content/level_content.module';
import { UserLevelStatModule } from './user_level_stat/user_level_stat.module';
import { ChapterLevelModule } from './chapter_level/chapter_level.module';

@Module({
  imports: [UserModule, PrismaModule, CourseModule, ChapterModule, LevelContentModule, UserLevelStatModule,LectureModule, ChapterLevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
