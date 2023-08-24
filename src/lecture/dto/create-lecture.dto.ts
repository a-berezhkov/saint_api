import { ApiProperty } from '@nestjs/swagger';


export class CreateLectureDto {
  // @ApiProperty({
  //   description: 'Access token of user',
  //   type: String,
  // })
  // accessToken: string;

  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  content: string;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  updated_at: Date;

  @ApiProperty({ required: false })
  created_by: string;

  @ApiProperty({ required: false })
  time_to_read: number;

  @ApiProperty({ required: false })
  is_draft: boolean;
}
