import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './@core/core.module';
import {SharedModule} from './@shared/shared.module';
import {UsersModule} from './users/users.module';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    CoreModule,
    SharedModule,
    RegisterModule,
    LoginModule,
    UsersModule,
    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}