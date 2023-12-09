import axios from 'axios';
import {BASE_GITHUB_URL} from '../constants/api/api';

const baseHeaders = {
  Accept: 'application/json',
};

export const axiosInstance = axios.create({
  headers: baseHeaders,
  baseURL: BASE_GITHUB_URL,
});

axiosInstance.interceptors.response.use(
  response => {
    switch (response.status) {
      case 200:
        console.log('200, Ok');
        break;
      case 201:
        console.log('201, Ok');

        break;
    }
    return response;
  },
  err => {
    switch (err.response.status) {
      case 304:
        console.log('304, Not Modified');
        throw 'Not modified :' + err.message;
      case 400:
        console.log('Error 400, Bad Request');
        throw 'Bad request :' + err.message;
      case 401:
        console.log('Error 401, Not Authorized');
        throw 'Not Authorized :' + err.message;
      case 403:
        console.log('Error 401, Forbidden');
        throw 'Forbidden :' + err.message;
      case 404:
        console.log('Error 404, Not Found');
        throw 'Not found :' + err.message;
      case 422:
        console.log('Error 422, Field Not correct');
        throw ' Data validation failed :' + err.message;

      default:
        console.log('Generic Error');
        throw ' Generic error :' + err.message;
    }
  },
);
