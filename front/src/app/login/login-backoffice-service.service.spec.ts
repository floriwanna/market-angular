import { TestBed } from '@angular/core/testing';

import { LoginBackofficeServiceService } from './login-backoffice-service.service';

describe('LoginBackofficeServiceService', () => {
  let service: LoginBackofficeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBackofficeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
