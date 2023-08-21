import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [UserModule, PrismaModule, LectureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
