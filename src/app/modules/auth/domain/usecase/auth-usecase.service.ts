import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUsecaseService {
  constructor(private readonly _authGatewayService: AuthGatewayService) {}

  getCode(clientId: string): void {
    return this._authGatewayService.getCode(clientId);
  }

  getToken(code: string): Observable<any> {
    return this._authGatewayService.getToken(code);
  }
}
