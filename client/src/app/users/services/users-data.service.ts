import {Injectable} from '@angular/core';
import {DataService} from '@shared/data/data.service';
import {environment} from '@env/environment';
import {RestTypesEnum} from '@shared/enums/rest-types.enum';
import {IUsersHttpResponse} from '../interfaces/users-http-response.interface';

@Injectable()
export class UsersDataService {
  private baseUrl = environment.baseUrl;
  private path    = environment.usersPath;

  constructor(private readonly dataService: DataService) {}

  async getUsers(): Promise<IUsersHttpResponse> {
    const url    = this.baseUrl + this.path;
    const method = RestTypesEnum.GET;
    try {
      return await this.dataService.api<undefined, IUsersHttpResponse>(url, method);
    } catch (e) {
      return await e;
    }
  }

}
