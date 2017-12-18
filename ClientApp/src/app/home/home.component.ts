import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private oauthService: OAuthService) { }

  getGreeting() {
    if (this.oauthService.hasValidAccessToken()) {
      return 'Here are the identity claims: ' + JSON.stringify(this.oauthService.getIdentityClaims());
    } else {
      return 'Not yet logged in';
    }
  }
}
