import { CLIENT_ID as secret } from '@env/environment';
import { AES, enc } from 'crypto-js';

export class Encoding {
  public static decodeBase64 = (value: string): string => atob(value);
  public static decryptAES = (cipher: string, key: string = secret): string => AES.decrypt(cipher, key).toString(enc.Utf8);
  public static encodeBase64 = (value: string): string => btoa(value);
  public static encryptAES = (value: string, key: string = secret): string => AES.encrypt(value, key).toString();
  public static fromStorage<T>(key: string, type?: new () => T): T {
    const encrypted: string = localStorage.getItem(key);
    if (encrypted) {
      const encoded: string = this.decryptAES(encrypted);
      const decoded: string = this.decodeBase64(encoded);
      return typeof (type) == 'string' ? decoded : JSON.parse(decoded);
    }
    return null;
  }
  public static toStorage<T>(key: string, value: T) {
    localStorage.setItem(key, this.encryptAES(
      this.encodeBase64(typeof (value) == 'string'
        ? value
        : JSON.stringify(value))));
  }
}
