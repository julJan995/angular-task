import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class AppRouterService {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

    navigateToLoginPage(): void {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }


    navigateToDashboard(): void {
      this.router.navigate(['/dashboard'], { relativeTo: this.route });
    }

}
