import axios from 'axios';

import HttpRequestPort from '../port/HttpRequestPort';
import { defineRequestHeader } from '@/util/defineRequestHeader';

import { RequestConfig, RequestDomain } from '@/@types/request';

class HttpRequest implements HttpRequestPort {
  private instance;
  private domain;

  constructor(baseURL: string, domain: RequestDomain) {
    this.instance = axios.create({ baseURL });
    this.domain = domain;
  }

  get(url: string, config?: RequestConfig) {
    return this.instance.get(url, this.getRequestConfig(config));
  }

  post<T>(url: string, data: T, config?: RequestConfig) {
    return this.instance.post(url, data, this.getRequestConfig(config));
  }

  delete(url: string, config?: RequestConfig) {
    return this.instance.delete(url, this.getRequestConfig(config));
  }

  put<T>(url: string, data: T, config?: RequestConfig) {
    return this.instance.put(url, data, this.getRequestConfig(config));
  }

  patch<T>(url: string, data: T, config?: RequestConfig) {
    return this.instance.patch(url, data, this.getRequestConfig(config));
  }

  getRequestConfig(config?: RequestConfig): RequestConfig | undefined {
    if (!config) {
      return undefined;
    }

    config.header = {
      ...config.header,
      ...defineRequestHeader(this.domain),
    };

    return config;
  }
}

export default HttpRequest;
