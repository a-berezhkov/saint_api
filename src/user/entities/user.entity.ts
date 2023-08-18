import { user } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserEntity implements user {

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  accessToken: string;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: true })
  expires: Date;

  @ApiProperty({ required: false })
  github_id: string;

  @ApiProperty({ required: false })
  google_id: string;

  @ApiProperty({ required: false })
  image_github: string;

  @ApiProperty({ required: false })
  last_log_in: Date;

  @ApiProperty({ required: true })
  name: string;
}
