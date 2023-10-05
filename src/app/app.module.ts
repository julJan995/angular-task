import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoggerService } from './loggerService.service';
import { AuthenticationService } from './authenticationService.service';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { AppRouterService } from './app-router.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoggerService,
    AuthenticationService,
    AppRouterService,
    IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
