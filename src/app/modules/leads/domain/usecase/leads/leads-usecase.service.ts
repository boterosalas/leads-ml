import { Injectable } from '@angular/core';
import { LeadsGatewayService } from '../../gateway/leads/leads-gateway.service';
import { Observable } from 'rxjs';
import { LeadsResponse } from '../../models/leads.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsUsecaseService implements LeadsGatewayService {
  constructor(private readonly _leadsGatewayService: LeadsGatewayService) {}

  get(params: any): Observable<LeadsResponse> {
    return this._leadsGatewayService.get(params);
  }

  download(fileType: 'xlsx' | 'csv'): Observable<any> {
    return this._leadsGatewayService.download(fileType);
  }
}
