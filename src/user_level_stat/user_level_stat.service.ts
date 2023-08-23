import { Injectable } from "@nestjs/common";
import { CreateUserLevelStatDto } from "./dto/create-user_level_stat.dto";
import { UpdateUserLevelStatDto } from "./dto/update-user_level_stat.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserLevelStatService {
  constructor(private prisma: PrismaService) {
  }

  create(createUserLevelStatDto: CreateUserLevelStatDto) {
    return this.prisma.user_level_stat.create({ data: createUserLevelStatDto });
  }

  findAll() {
    return this.prisma.user_level_stat.findMany();
  }

  findOne(id: string) {
    return this.prisma.user_level_stat.findUnique({ where: { id } });
  }

  update(id: string, updateUserLevelStatDto: UpdateUserLevelStatDto) {
    return this.prisma.user_level_stat.update({ data: updateUserLevelStatDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.user_level_stat.delete({ where: { id } });
  }
}
