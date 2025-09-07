import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyRequest } from '../../models/proxy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private readonly _httpClient = inject(HttpClient);
  private readonly apiUrl =
    'https://2o8i6bmmue.execute-api.us-east-1.amazonaws.com/MeliDevStage/trigger';

  useProxy<T>(request: ProxyRequest): Observable<T> {
    return this._httpClient.post<T>(this.apiUrl, request);
  }
}
