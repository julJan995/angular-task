import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AuthenticationService } from '../authenticationService.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    ToolbarComponent,

  ]
})

export class DashboardComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) {}


  onLogoutClick(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    //console.log(this.loggerService.emailToDisplay())
  }
}
