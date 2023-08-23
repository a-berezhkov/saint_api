import { Injectable } from "@nestjs/common";
import { CreateLevelContentDto } from "./dto/create-level_content.dto";
import { UpdateLevelContentDto } from "./dto/update-level_content.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LevelContentService {

  constructor(private prisma: PrismaService) {
  }

  create(createLevelContentDto: CreateLevelContentDto) {
    return this.prisma.level_content.create({ data: createLevelContentDto });
  }

  findAll() {
    return this.prisma.level_content.findMany();
  }

  findOne(id: string) {
    return this.prisma.level_content.findUnique({ where: { id } });
  }

  update(id: string, updateLevelContentDto: UpdateLevelContentDto) {
    return this.prisma.level_content.update({ where: { id }, data: updateLevelContentDto });
  }

  remove(id: string) {
    return this.prisma.level_content.delete({ where: { id } });
  }

  findByChapterLevelId(chapterLevelId: string) {
    return this.prisma.level_content.findMany({ where: { chapter_level_id: chapterLevelId } });
  }
}
