import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leads } from '../models/leads.model';

export abstract class LeadsGatewayService {
  abstract get(params: any): Observable<Leads>;
  abstract getCode(clientId: string): void;
}
