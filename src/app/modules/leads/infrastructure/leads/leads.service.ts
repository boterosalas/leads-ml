import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeadsGatewayService } from '../../domain/leads/gateway/leads.service';
import { Observable } from 'rxjs';
import { LeadsResponse } from '../../domain/leads/models/leads.model';
import { ProxyService } from '../../../../core/services/proxy/proxy.service';
import { ProxyRequest } from '../../../../core/models/proxy.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsService implements LeadsGatewayService {
  private _proxy = inject(ProxyService);

  get(params: any): Observable<LeadsResponse> {
    const { userId } = JSON.parse(localStorage.getItem('user') || '') || {
      userId: '',
    };
    const request: ProxyRequest = {
      method: 'GET',
      url: `https://api.mercadolibre.com/vis/users/${userId}/leads/buyers`,
      // data: {
      //   offset: 0,
      //   limit: 10,
      //   dateFrom: 1,
      //   dateTo: 1,
      //   contactTypes: 1,
      // },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this._proxy.useProxy<any>(request);
  }

  addHeaderToken(token: string) {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
