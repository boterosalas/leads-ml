import { Injectable, inject } from '@angular/core';
import { AuthGatewayService } from '../domain/gateway/auth.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { ProxyRequest, ProxyResponse } from '../domain/models/proxy.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthGatewayService {
  private readonly _httpClient = inject(HttpClient);
  private readonly apiUrl =
    'https://2o8i6bmmue.execute-api.us-east-1.amazonaws.com/MeliDevStage/trigger';

  getCode() {
    console.log('getCode desde el servicio');
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${environments.clientId}&redirect_uri=${environments.redirectUri}`;
  }

  getAccessToken<T>(code: string): Observable<T> {
    const request: ProxyRequest = {
      method: 'POST',
      url: 'https://api.mercadolibre.com/oauth/token',
      data: {
        code,
        grant_type: 'authorization_code',
        redirect_uri: environments.redirectUri,
        client_id: '8315944344732576',
        client_secret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.useProxy(request);
  }

  useProxy<T>(request: ProxyRequest): Observable<T> {
    return this._httpClient.post<ProxyResponse<T>>(this.apiUrl, request).pipe(
      map((res) => {
        // En tu Lambda, body viene en string → parseamos
        let parsed: any;
        try {
          parsed =
            typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
        } catch {
          parsed = res.body;
        }
        return parsed;
      })
    );
  }
}
