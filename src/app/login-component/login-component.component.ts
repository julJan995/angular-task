import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../services/logger.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    ToolbarComponent,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ]
})
export class LoginComponentComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  get emailControl(): AbstractControl<string | null>  {
    return this.loginForm.controls.email;
  }

  get passwordControl(): AbstractControl<string | null> {
    return this.loginForm.controls.password;
  }

  get emailErrorMessage(): string {
    if (this.emailControl.hasError('required')) {
      return 'Enter your e-mail';
    }
    return this.emailControl.hasError('email') ? 'Incorrect e-mail' : '';
  }

  get passwordErrorMessage(): string {
    if (this.passwordControl.hasError('required')) {
      return 'Enter your password';
    }
    return this.passwordControl.hasError('minlength') ? 'Incorrect password' : '';
  }

  get isFormValid():boolean {
    return this.emailControl.valid && this.passwordControl.valid;
  }

  constructor(private loggerService: LoggerService) { }

  onSubmit(): void {
    if(this.isFormValid) {
      this.loggerService.setLoginData({
        email: this.emailControl.value ?? '',
        password: this.passwordControl.value ?? ''
      });
      this.emailControl.reset();
      this.passwordControl.reset();
    }
  }

}
