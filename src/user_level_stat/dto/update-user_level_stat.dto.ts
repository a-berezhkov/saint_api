import { PartialType } from '@nestjs/swagger';
import { CreateUserLevelStatDto } from './create-user_level_stat.dto';

export class UpdateUserLevelStatDto extends PartialType(CreateUserLevelStatDto) {}
