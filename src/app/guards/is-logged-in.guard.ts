import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { AppRouterService } from "../services/app-router.service";

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private appRouterService: AppRouterService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

    return this.authService.isUserSignedIn$.pipe(
      tap((isUserSignedIn: boolean) => {
        if (!isUserSignedIn) {
          this.appRouterService.navigateToLoginPage();
        }
      })
    );
  }
}
