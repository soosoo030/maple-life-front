import createAxios from './axios';

export default class UserAPI {
  static async signup(data) {
    return await createAxios().post('/users/signup', data);
  }

  static async login(data) {
    return await createAxios().post('/users/login', data);
  }

  static async me() {
    return await createAxios().get('/users');
  }

  static async editUsername(id, data) {
    return await createAxios().patch(`/users/${id}/username`, data);
  }
}
