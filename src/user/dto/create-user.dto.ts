import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

  @ApiProperty({
    description: 'Access token of user',
    type: String,
  })
  accessToken: string

  @ApiProperty({ required: false })
  created_at?: string

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  expires?: string

  @ApiProperty({ required: false })
  github_id?: string

  @ApiProperty({ required: false })
  google_id?: string

  @ApiProperty({ required: false })
  image_github?: string

  @ApiProperty({ required: false })
  last_log_in?: string

  @ApiProperty()
  name: string


  @ApiProperty()
  user: string

}
