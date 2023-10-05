import { Injectable } from '@angular/core';
import { AuthenticationService } from './authenticationService.service';
import { UserCredentials } from './models';


@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor(
    private authService: AuthenticationService) { }

  setLoginData(data: UserCredentials) {
    this.authService.login(data);
  }
}
