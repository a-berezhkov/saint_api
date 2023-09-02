import { lecture } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class LectureEntity implements lecture {

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

  @ApiProperty({
    description: "Title lecture",
    required: true,
    type: String,
    nullable: false,
    example: "How create button"
  })
  title: string;

  @ApiProperty({
    description: "Content of lecture",
    required: true,
    type: String,
    nullable: false,
    example: "<p> A lot of text in HTML<p>"
  })
  content: string;

  @ApiProperty({
    description: "Date created lecture",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "current datetime"
  })
  created_at: Date | null;

  @ApiProperty({
    description: "Date last update lecture",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "current datetime"
  })
  updated_at: Date;

  @ApiProperty({
    description: "Author lecture. User ID.",
    required: false,
    type: String,
    nullable: true,
    example: "64d63baa980ffe56f1c0c2fa"
  })
  created_by: string | null;

  @ApiProperty({
    description: "Time to read",
    required: false,
    type: Number,
    nullable: true,
    example: 5,
    default: 0
  })
  time_to_read: number;

  @ApiProperty({
    description: "Is publish",
    required: true,
    type: Boolean,
    nullable: false,
    example: false,
    default: true
  })
  is_draft: boolean;
}
