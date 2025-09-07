import { Observable } from 'rxjs';
import { LeadsResponse } from '../models/leads.model';

export abstract class LeadsGatewayService {
  abstract get(params: any): Observable<LeadsResponse>;
}
