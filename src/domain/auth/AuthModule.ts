import { Module } from "@nestjs/common";
import { UserInfrastructureModule } from "../user/infrastructure/UserInfrastructureModule";
import { UserRepoProvider } from "../user/infrastructure/typeorm/repository/UserRepositoryProvider";
import { AuthController } from "./application/AuthController";
import { AuthImplementationModule } from "./implementations/AuthImplementationModule";

@Module({
  imports: [AuthImplementationModule, UserInfrastructureModule],
  exports: [AuthImplementationModule, UserInfrastructureModule],
  controllers: [AuthController]
})
export class AuthModule {}
