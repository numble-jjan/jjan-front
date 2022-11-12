export type CookieConfig = {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: string;
};

export default interface BrowserStoragePort {
  get(key: string): string | null;
  set(key: string, value: string, config?: CookieConfig): void;
  remove(key: string): void;
}
