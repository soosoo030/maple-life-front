import createAxios from './axios';

export default class TaskAPI {
  static async createTask(task) {
    const axios = createAxios();
    return await axios.post('/tasks', task);
  }

  static async getTasks() {
    const axios = createAxios();
    return await axios.get('/tasks');
  }

  static async editTask(id, data) {
    const axios = createAxios();
    return await axios.put(`/tasks/${id}`, data);
  }

  static async deleteTask(id) {
    const axios = createAxios();
    return await axios.delete(`/tasks/${id}`);
  }

  static async completeTask(id) {
    const axios = createAxios();
    return await axios.patch(`/tasks/${id}/status/done`);
  }
}
