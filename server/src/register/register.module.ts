import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";
import { UsersService } from "../users/users.service";
import { Users } from "../users/entities/users.entity";
import {WebsocketService} from '@core/websockets/websocket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [RegisterController],
  providers: [RegisterService, WebsocketService, UsersService],
})
export class RegisterModule {}
