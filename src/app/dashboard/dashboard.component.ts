import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatCardModule
  ]
})
export class DashboardComponent {

  constructor(private readonly authService: AuthenticationService) {}

  onLogoutClick(): void {
    this.authService.logout();
  }
}
