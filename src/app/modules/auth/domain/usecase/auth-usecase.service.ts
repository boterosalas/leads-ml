import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth.service';
import { Observable } from 'rxjs';
import { ProxyRequest } from '../models/proxy.model';

@Injectable({
  providedIn: 'root',
})
export class AuthUsecaseService implements AuthGatewayService {
  constructor(private readonly _authGatewayService: AuthGatewayService) {}

  getCode(): void {
    return this._authGatewayService.getCode();
  }

  getAccessToken(code: string): Observable<any> {
    return this._authGatewayService.getAccessToken(code);
  }

  useProxy<T>(request: ProxyRequest): Observable<T> {
    return this._authGatewayService.useProxy(request);
  }
}
