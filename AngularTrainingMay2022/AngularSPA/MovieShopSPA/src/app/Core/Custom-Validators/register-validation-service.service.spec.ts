import { TestBed } from '@angular/core/testing';

import { RegisterValidationServiceService } from './register-validation-service.service';

describe('RegisterValidationServiceService', () => {
  let service: RegisterValidationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterValidationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
