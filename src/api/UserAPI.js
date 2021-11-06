import createAxios from './axios';

export default class UserAPI {
  static async login(data) {
    return createAxios().post('/users/login', data);
  }

  static async me() {
    return createAxios().get('/users');
  }
}
