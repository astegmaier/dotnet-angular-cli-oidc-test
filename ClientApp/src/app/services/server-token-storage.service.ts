import { Injectable, Inject } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';

interface ServerCookie {
  key: string;
  value: string;
}

@Injectable()
export class ServerTokenStorageService implements OAuthStorage {

  private cookies: Map<string, string>;
  constructor(@Inject('COOKIES') cookiesArray: ServerCookie[]) { 
    this.cookies = new Map<string, string>();
    for (let cookie of cookiesArray) {
      this.cookies.set(cookie.key, cookie.value);
    }
  }

  getItem(key: string): string {
    if (this.cookies) {
      return this.cookies.get(key);
    }
    return '';
  }

  removeItem(key: string): void {
  }

  setItem(key: string, data: string): void {
  }
}
