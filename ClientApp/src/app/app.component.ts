import { Component } from '@angular/core';
import { AuthConfig, OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: "https://demo.identityserver.io",
  requireHttps: true,

  // URL of the SPA to redirect the user to after login
  redirectUri: "http://localhost:5000/",

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: "http://localhost:5000/silent-refresh.html",
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: "implicit",

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: "openid profile email api",

  showDebugInformation: true,

  sessionChecksEnabled: true
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
