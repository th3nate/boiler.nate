import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {DataService} from './data.service';

@NgModule({
  imports     : [HttpClientModule],
  providers   : [AuthInterceptor, DataService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  declarations: []
})

export class DataModule {
}
