import { Observable } from "rxjs";

export abstract class AuthGatewayService {
  abstract getCode(clientId: string): void;
  abstract getToken(code: string): Observable<any>;
}
