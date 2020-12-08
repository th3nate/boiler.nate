import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {EGlobal} from '@shared/enums/global.enum';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private readonly router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isAuthenticated = localStorage.getItem(EGlobal.TOKEN_KEY);
    if (!isAuthenticated) {
      await this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
