import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth.service';
import { Observable } from 'rxjs';
import { ProxyRequest } from '../models/proxy.model';

@Injectable({
  providedIn: 'root',
})
export class AuthUsecaseService implements AuthGatewayService {
  constructor(private readonly _authGatewayService: AuthGatewayService) {}

  getCode(clientId: string): void {
    return this._authGatewayService.getCode(clientId);
  }

  getAccessToken(code: string): Observable<any> {
    return this._authGatewayService.getAccessToken(code);
  }

  getLeads(): Observable<any> {
    return this._authGatewayService.getLeads();
  }

  useProxy<T>(request: ProxyRequest): Observable<T> {
    return this._authGatewayService.useProxy(request);
  }
}
