import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { ChapterModule } from './chapter/chapter.module';
import { LevelContentModule } from './level_content/level_content.module';

@Module({
  imports: [UserModule, PrismaModule, CourseModule, ChapterModule, LevelContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
