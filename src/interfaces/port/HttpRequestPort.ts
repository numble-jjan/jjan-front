import { RequestConfig } from '@/@types/request';

export default interface HttpRequestPort {
  get(url: string, config?: RequestConfig): Promise<any>;
  post<T>(url: string, data: T, config?: RequestConfig): Promise<any>;
  delete(url: string, config?: RequestConfig): Promise<any>;
  put<T>(url: string, data: T, config?: RequestConfig): Promise<any>;
  patch<T>(url: string, data: T, config?: RequestConfig): Promise<any>;
}
