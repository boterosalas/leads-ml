import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeadsGatewayService } from '../../domain/gateway/leads/leads-gateway.service';
import { Observable, of, throwError } from 'rxjs';
import { LeadsFormValue, LeadsResponse } from '../../domain/models/leads.model';
import { ProxyService } from '../../../../core/services/proxy/proxy.service';
import { ProxyRequest } from '../../../../core/models/proxy.model';
import { MockLeadsResponse } from '../../domain/mocks/leads';
import { leadsRequestMapper } from './leads-request-mapper';

@Injectable({
  providedIn: 'root',
})
export class LeadsService implements LeadsGatewayService {
  private _proxy = inject(ProxyService);
  private _httpClient = inject(HttpClient);

  get(params: LeadsFormValue): Observable<LeadsResponse> {
    // return of(MockLeadsResponse);
    const token = localStorage.getItem('token');
    if (token) {
      const { access_token } = JSON.parse(token);
      const { id } = JSON.parse(localStorage.getItem('user') || '') || {
        id: '',
      };
      const request: ProxyRequest = {
        method: 'GET',
        url: `https://api.mercadolibre.com/vis/users/${id}/leads/buyers`,
        data: leadsRequestMapper(params),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };
      return this._proxy.useProxy<any>(request);
    }
    return throwError(() => new Error('No token provided'));
  }

  addHeaderToken(token: string) {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  download(fileType: 'xlsx' | 'csv'): Observable<any> {
    const params = {
      data: MockLeadsResponse.results,
      fileType,
    };
    return this._httpClient.post(
      'https://rb2gfds5ed.execute-api.us-east-1.amazonaws.com/download-file/',
      params,
      { responseType: 'blob' }
    );
  }
}
