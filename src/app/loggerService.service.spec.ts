import { TestBed } from '@angular/core/testing';

import { LoggerService } from './loggerService.service';

describe('LoggerServiceService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
