import BrowserStoragePort from '../port/BrowserStoragePort';

class LocalStorage implements BrowserStoragePort {
  get(key: string) {
    return localStorage.getItem(key);
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorage();
