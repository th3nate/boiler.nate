import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from '../@shared/guards/auth-guard.service';

const routes: Routes = [{
  path       : 'users',
  loadChildren: () => import('./users.module').then(m => m.UsersModule),
  canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
