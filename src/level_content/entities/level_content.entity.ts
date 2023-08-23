import { level_content } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class LevelContentEntity implements level_content {

  @ApiProperty({ required: true })
  chapter_level_id: string;

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false, nullable: true })
  lecture_id: string | null;

  @ApiProperty({ required: true })
  order: number;

  @ApiProperty({ required: false, nullable: true })
  task_id: string | null;

}
