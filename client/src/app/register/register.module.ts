import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {SharedModule} from '../@shared/shared.module';
import {RegisterDataService} from './services/register-data.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: RegisterComponent
    }]),
    SharedModule,
    RegisterRoutingModule
  ],
  providers: [RegisterDataService]
})
export class RegisterModule { }
