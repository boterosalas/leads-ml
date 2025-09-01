export abstract class AuthGatewayService {
  abstract getCode(clientId: string): void;
}
