import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth-gateway.service';
import { Observable } from 'rxjs';

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
}
