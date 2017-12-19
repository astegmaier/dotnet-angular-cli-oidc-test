import { Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class ServerTokenStorageService implements OAuthStorage {

  constructor() { }

  getItem(key: string): string {
      return 'NotImplemented';
  }

  removeItem(key: string): void {
  }

  setItem(key: string, data: string): void {
  }
}
