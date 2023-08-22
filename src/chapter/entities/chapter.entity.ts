import { ApiProperty } from "@nestjs/swagger";
import { chapter } from "@prisma/client";

export class ChapterEntity implements chapter{
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false, nullable: true })
  desc: string | null;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  course_id: string;

  @ApiProperty({ required: false })
  order: number;
}
