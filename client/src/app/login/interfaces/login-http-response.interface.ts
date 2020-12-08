import {ILoginHttpUserResponse} from './login-http-user-response.interface';

export interface IHttpLoginResponse {
  expiresIn: number;
  accessToken: string;
  user: ILoginHttpUserResponse;
  status: number;
}
