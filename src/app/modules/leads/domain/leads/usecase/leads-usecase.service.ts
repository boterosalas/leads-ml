import { Injectable } from '@angular/core';
import { LeadsGatewayService } from '../gateway/leads.service';
import { Observable } from 'rxjs';
import { Leads } from '../models/leads.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsUsecaseService {
  constructor(private readonly _leadsGatewayService: LeadsGatewayService) {}

  get(params: any): Observable<Leads> {
    return this._leadsGatewayService.get(params);
  }
}
