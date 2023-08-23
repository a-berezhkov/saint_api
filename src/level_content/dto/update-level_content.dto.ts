import { PartialType } from '@nestjs/swagger';
import { CreateLevelContentDto } from './create-level_content.dto';

export class UpdateLevelContentDto extends PartialType(CreateLevelContentDto) {}
