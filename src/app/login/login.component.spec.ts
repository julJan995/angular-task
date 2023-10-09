import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { LoggerService } from '../services/logger.service';

describe('LoginComponentComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NoopAnimationsModule, LoginComponent],
      providers: [
        {
          provide: LoggerService,
          useValue: {}
        }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emailErrorMessage', () => {
    it('should return proper error for empty e-mail', () => {
      const expectedMsg = 'Enter your e-mail';

      component.emailControl.setValue(null);
      component.emailControl.updateValueAndValidity();

      expect(component.emailErrorMessage).toBe(expectedMsg);
    });

    it('should return proper error for incorrect e-mail', () => {
      const expectedMsg = 'Incorrect e-mail';

      component.emailControl.setValue('wrongemail');
      component.emailControl.updateValueAndValidity();

      expect(component.emailErrorMessage).toBe(expectedMsg);
    });

    it('should return empty string for correct e-mail', () => {
      const expectedMsg = '';

      component.emailControl.setValue('correct@email.com');
      component.emailControl.updateValueAndValidity();

      expect(component.emailErrorMessage).toBe(expectedMsg);
    });
  });

  describe('passwordErrorMessage', () => {
    it('should return proper error for empty password', () => {
      const expectedMsg = 'Enter your password';

      component.passwordControl.setValue(null);
      component.passwordControl.updateValueAndValidity();

      expect(component.passwordErrorMessage).toBe(expectedMsg);
    });

    it('should return proper error for password shorter than 8 chars', () => {
      const expectedMsg = 'Incorrect password';

      component.passwordControl.setValue('1234567');
      component.passwordControl.updateValueAndValidity();

      expect(component.passwordErrorMessage).toBe(expectedMsg);
    });

    it('should return empty string for password with 8 chars', () => {
      const expectedMsg = '';

      component.passwordControl.setValue('12345678');
      component.passwordControl.updateValueAndValidity();

      expect(component.passwordErrorMessage).toBe(expectedMsg);
    });

  });
});
