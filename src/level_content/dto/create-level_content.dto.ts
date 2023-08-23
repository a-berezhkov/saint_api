import { ApiProperty } from "@nestjs/swagger";

export class CreateLevelContentDto {

  @ApiProperty({ required: false })
  chapter_level_id: string;

  @ApiProperty({ required: true })
  order: number;

  @ApiProperty({ required: false })
  lecture_id: string | null;

  @ApiProperty({ required: false })
  task_id: string | null;

}
