import { ApiProperty } from "@nestjs/swagger";

export class CreateLevelContentDto {

  @ApiProperty({
    description: "Chapter level ID. Object ID.",
    required: true,
    type: String,
    nullable: false,
    example: "64de366a980ffe56f1c0c35e"
  })
  chapter_level_id: string;

  @ApiProperty({
    description: "Lecture ID. ObjectID",
    required: false,
    type: String,
    nullable: true,
    example: "64d63ab1980ffe56f1c0c2f8"
  })
  lecture_id: string | null;

  @ApiProperty({
    description: "Order in level",
    required: false,
    type: Number,
    nullable: true,
    example: 1,
    default: 0
  })
  order: number;

  @ApiProperty({
    description: "Task ID (task_abstract). ObjectID",
    required: false,
    type: String,
    nullable: true,
    example: "64e264a3980ffe56f1c0c417"
  })
  task_id: string | null;

}
