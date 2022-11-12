import HttpRequestPort, { HttpConfig } from '../port/HttpRequestPort';
import axios from 'axios';

// todo
// bearer token

class HttpRequest implements HttpRequestPort {
  private instance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  get(url: string, config?: HttpConfig) {
    return this.instance.get(url, config);
  }

  post(url: string, data: any, config?: HttpConfig) {
    return this.instance.post(url, data, config);
  }

  delete(url: string, config?: HttpConfig) {
    return this.instance.delete(url, config);
  }

  put(url: string, data: any, config?: HttpConfig) {
    return this.instance.put(url, data, config);
  }

  patch(url: string, data: any, config?: HttpConfig) {
    return this.instance.patch(url, data, config);
  }
}

// todo
// baseURL => env 파일로
const url = 'exsample';

export default new HttpRequest(url);
