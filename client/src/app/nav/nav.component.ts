import {Component} from '@angular/core';
import {UserService} from '@core/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector   : 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls  : ['./nav.component.scss']
})
export class NavComponent {
  public isAuthenticated = this.userService.isAuthenticated;

  constructor(private readonly userService: UserService, private readonly router: Router) {}

  public async logout(): Promise<void> {
    this.userService.logout();
    await this.router.navigate(['login']);
  }
}
