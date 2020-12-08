import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from './interfaces/user.interface';
import {UsersWsService} from './users-ws.service';

@Injectable()
export class UsersService {
  private data = [] as IUser[];

  constructor(private socket: UsersWsService) {
  }

  get currentUsers(): IUser[] {
    return this.data;
  }

  set currentUsers(data: IUser[]) {
    this.data = data;
  }

  listen(eventName: string): Observable<any> {
    return this.socket.fromEvent(eventName);
  }

  unsubscribe(eventName: string): any {
    return this.socket.removeAllListeners(eventName);
  }
}
