import {IUser} from './user.interface';

export interface IUsersHttpResponse{
  users: IUser[];
  status: number;
}
