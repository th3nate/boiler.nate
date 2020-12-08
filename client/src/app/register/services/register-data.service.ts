import {Injectable} from '@angular/core';
import {DataService} from '@shared/data/data.service';
import {environment} from '@env/environment';
import {IRegisterPayload} from '../interfaces/register-payload.interface';
import {IHttpMessageResponse} from '@shared/interfaces/http-message-response.interface';
import {RestTypesEnum} from '@shared/enums/rest-types.enum';

@Injectable()
export class RegisterDataService {
  private baseUrl = environment.baseUrl;
  private path    = environment.registerPath;

  constructor(private readonly dataService: DataService) {}

  async createUser(data: IRegisterPayload): Promise<IHttpMessageResponse> {
    const url    = this.baseUrl + this.path;
    const method = RestTypesEnum.POST;
    try {
      return await this.dataService.api<IRegisterPayload, IHttpMessageResponse>(url, method, data);
    } catch (e) {
      return await e;
    }
  }

}
