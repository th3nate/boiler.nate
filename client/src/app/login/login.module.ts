import {NgModule} from '@angular/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {SharedModule} from '../@shared/shared.module';
import {LoginDataService} from '@app/login/services/login-data.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports     : [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    }]),
    SharedModule,
    LoginRoutingModule
  ],
  providers   : [LoginDataService]
})
export class LoginModule {
}
