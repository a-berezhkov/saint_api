import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLevelStatService } from './user_level_stat.service';
import { CreateUserLevelStatDto } from './dto/create-user_level_stat.dto';
import { UpdateUserLevelStatDto } from './dto/update-user_level_stat.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('user-level-stat')
@ApiTags('User Statistics')
export class UserLevelStatController {
  constructor(private readonly userLevelStatService: UserLevelStatService) {}

  @Post()
  create(@Body() createUserLevelStatDto: CreateUserLevelStatDto) {
    return this.userLevelStatService.create(createUserLevelStatDto);
  }

  @Get()
  findAll() {
    return this.userLevelStatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLevelStatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLevelStatDto: UpdateUserLevelStatDto) {
    return this.userLevelStatService.update(id, updateUserLevelStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLevelStatService.remove(id);
  }
}
