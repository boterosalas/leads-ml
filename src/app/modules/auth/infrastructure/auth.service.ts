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
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${environments.clientId}&redirect_uri=${environments.redirectUri}`;
  }

  getToken<T>(code: string): Observable<T> {
    const params = {
      code,
      grant_type: 'authorization_code',
      client_id: '8315944344732576',
      redirect_uri: 'https://boterosalas.github.io/leads-ml/',
      client_secret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
    };
    return this._httpClient
      .post<ProxyResponse<T>>(
        'https://2o8i6bmmue.execute-api.us-east-1.amazonaws.com/MeliDevStage/trigger',
        params
      )
      .pipe(
        map((res) => {
          // Si body viene como string se parsea y luego se retorna
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

  callProxy<T>(request: ProxyRequest): Observable<T> {
    // return this._httpClient
    //   .post<ProxyResponse<T>>(this.apiUrl, request, { withCredentials: true })
    //   .pipe(
    //     map((res) => {
    //       // En tu Lambda, body viene en string → parseamos
    //       let parsed: any;
    //       try {
    //         parsed =
    //           typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
    //       } catch {
    //         parsed = res.body;
    //       }
    //       return parsed;
    //     })
    //   );

    return this._httpClient
      .post<ProxyResponse<T>>(
        'https://2o8i6bmmue.execute-api.us-east-1.amazonaws.com/MeliDevStage/trigger',
        {
          code: 'TG-68ba67191dfc2a000103d295-2651263697',
          grant_type: 'authorization_code',
          client_id: '8315944344732576',
          redirect_uri: 'https://boterosalas.github.io/leads-ml/',
          client_secret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
        }
      )
      .pipe(
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
