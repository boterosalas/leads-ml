import { Injectable } from '@angular/core';
import { AuthGatewayService } from '../domain/gateway/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthGatewayService {
  getCode(clientId: string = '8315944344732576') {
    window.location.href = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${clientId}&redirect_uri=https://boterosalas.github.io/leads-ml/`;
  }
}
