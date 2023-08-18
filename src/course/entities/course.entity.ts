import { ApiProperty } from "@nestjs/swagger";
import {course} from "@prisma/client"

export class CourseEntity implements course{

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false, nullable: true })
  desc: string | null;

  @ApiProperty({ required: true })
  title: string;
}
