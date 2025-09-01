import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../gateway/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUsecaseService {
  constructor(private readonly _authGatewayService: AuthGatewayService) {}

  getCode(clientId: string): void {
    return this._authGatewayService.getCode(clientId);
  }
}
