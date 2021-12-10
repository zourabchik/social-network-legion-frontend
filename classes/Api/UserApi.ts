import BaseApi from "~/classes/BaseApi";
import {
  UserResponseInterface,
  UsersGetPayloadInterface,
  UsersResponseInterface
} from "~/interfaces/classes/Api/UserApiInterface";

export default class UserApi extends BaseApi{
  protected uri = 'users';

  public async getAll(payload: UsersGetPayloadInterface): Promise<UsersResponseInterface> {
    return await this.callToApi('get', this.uri, payload);
  }

  public async me(): Promise<UserResponseInterface> {
    return await this.callToApi('get', this.uri + '/me');
  }

  public async byId(id: number): Promise<UserResponseInterface> {
    return await this.callToApi('get', `this.uri + /${id}`);
  }
}
