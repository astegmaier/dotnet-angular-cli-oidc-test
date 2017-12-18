import { Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class BrowserTokenStorageService implements OAuthStorage {
    getItem(key: string): string {
        return this.readCookie(key);
    }

    removeItem(key: string): void {
        this.removeCookie(key);
    }

    setItem(key: string, data: string): void {
        this.writeCookie(key, data);
    }

    private readCookie(name: string) {
        var result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
        return result ? result[1] : null;
    }

    private writeCookie(name: string, value: string, days?: number) {
        if (!days) {
            days = 365 * 20;
        }

        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        var expires = "; expires=" + date.toUTCString();

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    private removeCookie(name: string) {
        this.writeCookie(name, "", -1);
    }
}
