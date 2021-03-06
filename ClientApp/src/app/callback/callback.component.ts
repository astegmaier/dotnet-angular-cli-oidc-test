import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) { }

  ngOnInit() {
    if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
      this.oauthService.initImplicitFlow('some-state');
    } else {
      //this.router.navigate(["/"]);
    }
  }

}
