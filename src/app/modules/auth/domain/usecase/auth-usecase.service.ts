import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth.service';
import { Observable } from 'rxjs';
import { ProxyRequest } from '../models/proxy.model';

@Injectable({
  providedIn: 'root',
})
export class AuthUsecaseService {
  constructor(private readonly _authGatewayService: AuthGatewayService) {}

  getCode(): void {
    return this._authGatewayService.getCode();
  }

  getToken(code: string): Observable<any> {
    return this._authGatewayService.getToken(code);
  }

  callProxy<T>(request: ProxyRequest): Observable<T> {
    return this._authGatewayService.callProxy(request);
  }
}
