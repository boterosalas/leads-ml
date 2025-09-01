import { TestBed } from '@angular/core/testing';

import { AuthUsecaseService } from './auth-usecase.service';

describe('AuthUsecaseService', () => {
  let service: AuthUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
