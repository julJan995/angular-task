import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { AppRouterService } from './app-router.service';
import { UserCredentials, UserDetails } from '../models';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  readonly userDetails$:
    BehaviorSubject<UserDetails | null> =
    new BehaviorSubject<UserDetails | null>(null);

  readonly isUserSignedIn$: Observable<boolean> = this.userDetails$.pipe(
    map((userDetails) => !!userDetails),
    );

  constructor(private appRouterService: AppRouterService) {}

  login(data: UserCredentials): void {
    this.userDetails$.next({
      email: data.email
    });
    this.appRouterService.navigateToDashboard();
  }

  logout(): void {
    this.userDetails$.next(null);
    this.appRouterService.navigateToLoginPage();
  }
}
