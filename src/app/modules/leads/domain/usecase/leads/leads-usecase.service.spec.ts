import { TestBed } from '@angular/core/testing';

import { LeadsUsecaseService } from './leads-usecase.service';

describe('LeadsUsecaseService', () => {
  let service: LeadsUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
