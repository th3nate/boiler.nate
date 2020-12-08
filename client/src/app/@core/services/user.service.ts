import {Injectable} from '@angular/core';
import {IHttpLoginResponse} from '@app/login/interfaces/login-http-response.interface';
import {ILoginHttpUserResponse} from '@app/login/interfaces/login-http-user-response.interface';
import {EGlobal} from '@shared/enums/global.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data: IHttpLoginResponse = {} as IHttpLoginResponse;

  get user(): ILoginHttpUserResponse {
    return this.data.user as ILoginHttpUserResponse;
  }

  set user(user: ILoginHttpUserResponse) {
    this.data.user = user;
  }

  get isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(EGlobal.TOKEN_KEY));
  }

  logout(): void {
    localStorage.removeItem(EGlobal.TOKEN_KEY);
  }

  login(token: string): void {
    localStorage.setItem(EGlobal.TOKEN_KEY, token);
  }

}
