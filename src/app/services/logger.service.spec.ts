import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import { AuthenticationService } from './authentication.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AuthenticationService,
        useValue: {}
      }]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
