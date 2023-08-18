import { Injectable } from "@nestjs/common";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {
  }

  create(createChapterDto: CreateChapterDto) {
    return this.prisma.chapter.create({ data: createChapterDto });
  }

  findAll() {
    return this.prisma.chapter.findMany();
  }

  findOne(id: string) {
    return this.prisma.chapter.findUnique({ where: { id } });
  }

  update(id: string, updateChapterDto: UpdateChapterDto) {
    return this.prisma.chapter.update({ where: { id }, data: updateChapterDto });
  }

  remove(id: string) {
    return this.prisma.chapter.delete({ where: { id } });
  }

  findByCourseId(courseId: string) {
    return this.prisma.chapter.findMany({ where: { course_id: courseId } });
  }
}
