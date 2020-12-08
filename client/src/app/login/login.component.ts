import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '@core/services/user.service';
import {ILoginPayload} from './interfaces/login-payload.interface';
import {LoginDataService} from './services/login-data.service';
import {IHttpLoginResponse} from './interfaces/login-http-response.interface';
import {HttpStatusCode} from '@shared/enums/http-status.enum';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hidePassword = true;

  constructor(private readonly userService: UserService,
              private readonly loginDataService: LoginDataService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email   : new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }

  public async loginUser(): Promise<void> {
    if (this.loginForm.valid) {
      const payload: ILoginPayload                = {
        email   : this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      };
      const loginUserResponse: IHttpLoginResponse = await this.loginDataService.loginUser(payload);

      if (loginUserResponse.status === HttpStatusCode.OK) {
        this.userService.user = loginUserResponse.user;
        this.userService.login(loginUserResponse.accessToken);
        await this.router.navigate(['users']);
        return;
      }

      this.userService.user = null;
      this.userService.logout();
      console.log(loginUserResponse);
    }
  }
}
