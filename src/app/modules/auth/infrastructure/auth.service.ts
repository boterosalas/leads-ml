import { Injectable, inject } from '@angular/core';
import { AuthGatewayService } from '../domain/gateway/auth-gateway.service';
import { Observable, map, tap, throwError } from 'rxjs';
import { environments } from '../../../../environments/environments';
import { ProxyRequest } from '../../../core/models/proxy.model';
import { User } from '../domain/models/user.model';
import { ProxyService } from '../../../core/services/proxy/proxy.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthGatewayService {
  private _proxy = inject(ProxyService);

  getCode(clientId: string) {
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${clientId}&redirect_uri=${environments.redirectUri}`;
  }

  getAccessToken<T>(code: string): Observable<T> {
    const { clientId, clientSecret } = JSON.parse(
      `${localStorage.getItem('keys')}`
    );
    const request: ProxyRequest = {
      method: 'POST',
      url: 'https://api.mercadolibre.com/oauth/token',
      data: {
        code,
        grant_type: 'authorization_code',
        redirect_uri: environments.redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this._proxy.useProxy<any>(request).pipe(
      tap((token) => {
        console.log('token from getAccessToken', token);
      })
    );
  }

  // {
  // getLeads() {
  //   const request: ProxyRequest = {
  //     method: 'GET',
  //     url: 'https://api.mercadolibre.com/vis/users/2651263697/leads/buyers',
  //     headers: {
  //       Authorization: `Bearer ${this.token}`,
  //     },
  //   };
  //   return this.useProxy(request);
  // }
  // }

  getMe() {
    const token = localStorage.getItem('token');
    if (token) {
      const { access_token } = JSON.parse(token);
      const request: ProxyRequest = {
        method: 'GET',
        url: 'https://api.mercadolibre.com/users/me',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };
      return this._proxy.useProxy<User>(request);
    }
    return throwError(() => new Error('No token provided'));
  }
}
