import { Injectable } from '@angular/core';
import { LeadsUsecaseService } from '../../domain/leads/usecase/leads-usecase.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeadsGatewayService } from '../../domain/leads/gateway/leads.service';
import { Observable } from 'rxjs';
import { Leads } from '../../domain/leads/models/leads.model';

@Injectable({
  providedIn: 'root',
})
export class LeadsService implements LeadsGatewayService {
  constructor(private readonly _httpClient: HttpClient) {}

  get(params: any): Observable<Leads> {
    const userId = 1;
    // const offset = 0;
    // const limit = 10;
    // const dateFrom = 1;
    // const dateTo = 1;
    // const contactTypes = 1;
    return this._httpClient.get<Leads>(
      `https://api.mercadolibre.com/vis/users/${userId}/leads/buyers`
    );
  }

  getCode(clientId: string = '8315944344732576') {
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${clientId}&redirect_uri=https://www.google.com`;
  }

  addHeaderToken(token: string) {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
