export type HttpConfig = {
  method?: string;
  baseURL?: string;
  params?: any;
  data?: any;
  header?: string;
};

export default interface HttpRequestPort {
  get(url: string, config?: HttpConfig): Promise<any>;
  post(url: string, data: any, config?: HttpConfig): Promise<any>;
  delete(url: string, config?: HttpConfig): Promise<any>;
  put(url: string, data: any, config?: HttpConfig): Promise<any>;
  patch(url: string, data: any, config?: HttpConfig): Promise<any>;
}
