import {Injectable} from '@angular/core';
import {Socket, SocketIoConfig} from 'ngx-socket-io';
import {environment} from '@env/environment';

@Injectable()
export class UsersWsService extends Socket {

  constructor() {
    super({url: environment.baseUrl} as SocketIoConfig);
  }
}
