import { CLIENT_ID as secret } from '@env/environment';
import { AES, enc } from 'crypto-js';

export class Encoding {
  public static encryptBase64(value: string): string {
    return btoa(value);
  }
  public static encryptAES(value: string, key: string = secret): string {
    return AES.encrypt(value, key).toString();
  }
  public static decryptBase64(value: string): string {
    return atob(value);
  }
  public static decryptAES(ciphertext: string, key: string = secret): string {
    return AES.decrypt(ciphertext, key).toString(enc.Utf8);
  }
}
