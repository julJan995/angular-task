import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AppRouterService } from './app-router.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AppRouterService,
        useValue: {}
      }]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
