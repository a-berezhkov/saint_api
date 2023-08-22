import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import {ChapterEntity} from "./entities/chapter.entity";
import { CourseEntity } from "../course/entities/course.entity";

@Controller("chapter")
@ApiTags('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {
  }

  @ApiCreatedResponse({type:ChapterEntity})
  @Post()
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chapterService.create(createChapterDto);
  }

  @ApiCreatedResponse({type:CourseEntity, isArray:true})
  @Get()
  findAll() {
    return this.chapterService.findAll();
  }

  @ApiCreatedResponse({type:CourseEntity})
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chapterService.findOne(id);
  }

  @ApiCreatedResponse({type:CourseEntity})
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChapterDto: UpdateChapterDto) {
    return this.chapterService.update(id, updateChapterDto);
  }

  @ApiCreatedResponse({type:CourseEntity})
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chapterService.remove(id);
  }

  @ApiCreatedResponse({type:CourseEntity, isArray: true})
  @Get("/find-by-course-id/:courseId")
  findByCourseId(@Param("courseId") courseId: string) {
    return this.chapterService.findByCourseId(courseId);
  }
}
