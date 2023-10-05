import { Component } from '@angular/core';
import { AuthenticationService } from '../authenticationService.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { UserDetails } from '../models';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ToolbarComponent {

  readonly userDetails$:
    Observable<UserDetails | null> = this.authService.userDetails$;

  constructor(private authService: AuthenticationService) {
   }
}
