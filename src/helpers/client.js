import axios from 'axios';
import clearAuth from './clearAuth';

const client = axios.create();

client.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 401) {
      clearAuth();
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default client;
