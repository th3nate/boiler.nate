import {Injectable} from '@angular/core';
import {DataService} from '@shared/data/data.service';
import {environment} from '@env/environment';
import {RestTypesEnum} from '@shared/enums/rest-types.enum';
import {ILoginPayload} from '../interfaces/login-payload.interface';
import {IHttpLoginResponse} from '../interfaces/login-http-response.interface';

@Injectable()
export class LoginDataService {
  private baseUrl = environment.baseUrl;
  private path    = environment.loginPath;

  constructor(private readonly dataService: DataService) {}

  async loginUser(data: ILoginPayload): Promise<IHttpLoginResponse> {
    const url    = this.baseUrl + this.path;
    const method = RestTypesEnum.POST;
    try {
      return await this.dataService.api<ILoginPayload, IHttpLoginResponse>(url, method, data);
    } catch (e) {
      return await e;
    }
  }

}
