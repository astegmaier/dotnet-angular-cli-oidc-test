import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { ServerTokenStorageService } from './services/server-token-storage.service';

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule, ServerTransferStateModule],
    bootstrap: [AppComponent],
    providers: [
        { provide: OAuthStorage, useClass: ServerTokenStorageService }
    ]
})
export class AppServerModule { }