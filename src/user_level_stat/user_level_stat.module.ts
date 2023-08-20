import { Module } from "@nestjs/common";
import { UserLevelStatService } from "./user_level_stat.service";
import { UserLevelStatController } from "./user_level_stat.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [UserLevelStatController],
  imports: [PrismaModule],
  providers: [UserLevelStatService]
})
export class UserLevelStatModule {
}
