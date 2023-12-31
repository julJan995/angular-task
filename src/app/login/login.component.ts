import { Component } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { LoggerService } from '../services/logger.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ]
})

export class LoginComponent {

  hidePassword = true;

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
    return this.loginForm.valid;
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
