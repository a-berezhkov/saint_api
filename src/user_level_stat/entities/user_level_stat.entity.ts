import { user_level_stat } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserLevelStatEntity implements user_level_stat {

  @ApiProperty({ required: false })
  attemp_count: number | null;

  @ApiProperty({ required: false })
  browsers: string[] | [];

  @ApiProperty({ required: false })
  devices: string[] | [];

  @ApiProperty({ required: false })
  end_at: Date | null;

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  is_complete: boolean | null;

  @ApiProperty({ required: true })
  level_content_id: string;

  @ApiProperty({ required: false })
  pause_at: Date[] | null;

  @ApiProperty({ required: false })
  start_at: Date | null;

  @ApiProperty({ required: false })
  task_wrong_answers: { task_abstract_id: string; answer: object; };

  @ApiProperty({ required: true })
  user_id: string;
}
