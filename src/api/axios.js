import axios from 'axios';

export default function createAxios() {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  return axios.create({
    baseURL: 'https://api.airini.synology.me',
    headers,
  });
}
