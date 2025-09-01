import { Injectable, inject } from '@angular/core';
import { AuthGatewayService } from '../domain/gateway/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthGatewayService {
  private readonly _httpClient = inject(HttpClient);

  getCode(clientId: string = '8315944344732576') {
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${clientId}&redirect_uri=${environments.redirectUri}`;
  }

  getToken(code: string): Observable<any> {
    const params = {
      code,
      grant_type: 'authorization_code',
      redirect_uri: environments.redirectUri,
      client_id: '8315944344732576',
      client_secret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
    };
    return this._httpClient.post('', params);
  }
}
