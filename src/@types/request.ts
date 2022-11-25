export type RequestDomain = 'server' | 'kakao';

export type RequestConfig = {
  params?: any;
  header: {
    Authorization: string;
  };
};
