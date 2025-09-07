export interface ProxyRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  params?: Record<string, any>; // query params
  data?: any; // body para POST, PUT, PATCH
  headers?: Record<string, string>;
}
