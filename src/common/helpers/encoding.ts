import { CLIENT_ID as secret } from '@env/environment';
import { AES, enc } from 'crypto-js';

export class Encoding {
  public static encodeBase64(value: string): string {
    return btoa(value);
  }
  public static encryptAES(value: string, key: string = secret): string {
    return AES.encrypt(value, key).toString();
  }
  public static decodeBase64(value: string): string {
    return atob(value);
  }
  public static decryptAES(ciphertext: string, key: string = secret): string {
    return AES.decrypt(ciphertext, key).toString(enc.Utf8);
  }
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
    localStorage.setItem(key,
      this.encryptAES(
        this.encodeBase64(
          typeof (value) == 'string'
            ? value
            : JSON.stringify(value))));
  }
}
