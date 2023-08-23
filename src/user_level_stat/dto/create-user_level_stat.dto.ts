import { user_level_stat } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserLevelStatDto implements user_level_stat {
  @ApiProperty({
    description: "Access token of user",
    type: Number,
    required: false
  })
  attemp_count: number | null;

  @ApiProperty({ type: Date, required: false })
  end_at: Date | null;

  @ApiProperty({ type: Date, required: false })
  id: string;

  @ApiProperty({ type: Boolean, required: false })
  is_complete: boolean | null;

  @ApiProperty({ type: String, required: true })
  level_content_id: string;

  @ApiProperty({ type: Date, required: false })
  pause_at: Date[] | null;

  @ApiProperty({ type: Date, required: false })
  start_at: Date | null;

  @ApiProperty({ type: String, required: true })
  user_id: string;

  @ApiProperty({ type: Array, required: false })
  browsers: string[];

  @ApiProperty({ type: Array, required: false })
  devices: string[];

  @ApiProperty({ type: Object, required: false })
  task_wrong_answers: { task_abstract_id: string; answer: object; };
}
