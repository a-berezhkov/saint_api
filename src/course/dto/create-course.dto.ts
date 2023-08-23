import {ApiProperty} from "@nestjs/swagger";

export class CreateCourseDto {

  @ApiProperty({ required: false })
  desc: string;

  @ApiProperty({ required: true })
  title: string;

}
