import { Observable } from 'rxjs';
import { ProxyRequest } from '../models/proxy.model';

export abstract class AuthGatewayService {
  abstract getCode(): void;
  abstract getToken(code: string): Observable<any>;
  abstract callProxy<T>(request: ProxyRequest): Observable<T>;
}
