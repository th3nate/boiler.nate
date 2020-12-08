import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {RegisterUserDto} from './dto/register-user.dto';
import {WebsocketService} from '@core/websockets/websocket.service';
import {IUsers} from './../users/interfaces/users.interface';

const EVENT_NAME = 'users-updated';

@Injectable()
export class RegisterService {
  constructor(private readonly usersService: UsersService, private readonly webSocketService: WebsocketService) {}
  
  public async register(registerUserDto: RegisterUserDto): Promise<IUsers> {
    registerUserDto.password = bcrypt.hashSync(registerUserDto.password, 8);
    registerUserDto.userId   = String(new Date().getTime());
    const registeredUser     = await this.usersService.create(registerUserDto);
    await this.webSocketService.emitMessage(EVENT_NAME, registeredUser);
    return registeredUser;
  }
  
}
