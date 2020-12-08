import {NgModule} from '@angular/core';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {SharedModule} from '../@shared/shared.module';
import {UsersService} from './users.service';
import {UsersWsService} from './users-ws.service';
import {RouterModule} from '@angular/router';
import {UsersDataService} from '@app/users/services/users-data.service';

@NgModule({
  declarations: [UsersComponent],
  imports     : [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: UsersComponent
    }]),
    SharedModule,
    UsersRoutingModule
  ],
  providers   : [UsersService, UsersDataService, UsersWsService]
})
export class UsersModule {
}
