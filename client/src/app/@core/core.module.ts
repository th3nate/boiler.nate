import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuardService} from '../@shared/guards/auth-guard.service';
import {SocketIoModule} from 'ngx-socket-io';
import {UserService} from '@core/services/user.service';

@NgModule({
  imports  : [
    BrowserModule,
    BrowserAnimationsModule,
    SocketIoModule
  ],
  exports  : [
    BrowserModule,
    BrowserAnimationsModule,
    SocketIoModule
  ],
  providers: [AuthGuardService, UserService]
})
export class CoreModule {
}
