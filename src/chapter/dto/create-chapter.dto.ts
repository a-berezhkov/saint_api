import { ApiProperty } from "@nestjs/swagger";

export class CreateChapterDto {

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: false })
  desc: string;

  @ApiProperty({ required: true })
  course_id: string;

  @ApiProperty({ required: false })
  order: number;

}
