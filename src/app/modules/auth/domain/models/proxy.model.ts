// src/app/models/proxy-request.model.ts
export interface ProxyRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  params?: Record<string, any>; // query params
  data?: any; // body para POST, PUT, PATCH
  headers?: Record<string, string>;
}

// src/app/models/proxy-response.model.ts
export interface ProxyResponse<T = any> {
  statusCode: number;
  body: T;
}
