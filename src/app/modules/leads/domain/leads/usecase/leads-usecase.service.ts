import { Injectable } from '@angular/core';
import { LeadsGatewayService } from '../gateway/leads.service';
import { Observable } from 'rxjs';
import { LeadsResponse } from '../models/leads.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsUsecaseService {
  constructor(private readonly _leadsGatewayService: LeadsGatewayService) {}

  get(params: any): Observable<LeadsResponse> {
    return this._leadsGatewayService.get(params);
  }
}
