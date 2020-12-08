import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from './interfaces/user.interface';
import {UsersService} from './users.service';
import {UsersDataService} from '@app/users/services/users-data.service';
import {HttpStatusCode} from '@shared/enums/http-status.enum';

const EVENT_NAME = 'users-updated';

@Component({
  selector   : 'app-users',
  templateUrl: './users.component.html',
  styleUrls  : ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public currentUsers = [] as IUser[];

  constructor(private readonly usersService: UsersService, private readonly usersDataService: UsersDataService) {
  }

  async ngOnInit(): Promise<void> {
    this.listenToWs();
    const {users, status} = await this.usersDataService.getUsers();
    if (status === HttpStatusCode.OK) {
      this.currentUsers = users;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeFromWs();
  }

  private listenToWs(): void {
    this.usersService
        .listen(EVENT_NAME)
        .subscribe((user: IUser) => {
          this.currentUsers.push(user);
          console.log('user: ', user);
        });
  }

  private unsubscribeFromWs(): void {
    this.usersService.unsubscribe(EVENT_NAME);
  }

  public trackByFn(index: number, item: IUser): string {
    return item.name;
  }

}
