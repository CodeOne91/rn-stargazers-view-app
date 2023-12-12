import axios, {AxiosError, AxiosResponse} from 'axios';
import {BASE_GITHUB_URL} from '../constants/api/api';

const baseHeaders = {
  Accept: 'application/json',
};

export const axiosInstance = axios.create({
  headers: baseHeaders,
  baseURL: BASE_GITHUB_URL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses
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
  (error: AxiosError) => {
    // Handle errors
    if (error.response) {
      const {status, data} = error.response;

      switch (status) {
        case 304:
          console.log('304, Not Modified');
          throw {status, message: 'Not modified: ' + data};
        case 400:
          console.log('Error 400, Bad Request');
          throw {status, message: 'Bad request: ' + data};
        case 401:
          console.log('Error 401, Not Authorized');
          throw {status, message: 'Not Authorized: ' + data};
        case 403:
          console.log('Error 401, Forbidden');
          throw {status, message: 'Forbidden: ' + data};
        case 404:
          console.log('Error 404, Not Found');
          throw {status, message: 'Not found: ' + data};
        case 422:
          console.log('Error 422, Field Not correct');
          throw {status, message: 'Data validation failed: ' + data};
        default:
          console.log('Generic Error');
          throw {status, message: 'Generic error: ' + data};
      }
    }
  },
);
