import { TestBed } from '@angular/core/testing';

import { LeadsGatewayService } from './leads-gateway.service';

describe('LeadsService', () => {
  let service: LeadsGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
