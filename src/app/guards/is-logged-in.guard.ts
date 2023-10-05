import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../authenticationService.service";

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

    return this.authService.isUserSignedIn$.pipe(
      tap((isUserSignedIn: boolean) => {
        if (!isUserSignedIn) {
           this.router.navigate(['/login'], { relativeTo: this.route });
        }
      })
    );
  }
}
