import { Observable } from 'rxjs';
import { ProxyRequest } from '../models/proxy.model';

export abstract class AuthGatewayService {
  abstract getCode(): void;
  abstract getAccessToken(code: string): Observable<any>;
  abstract useProxy<T>(request: ProxyRequest): Observable<T>;
}
