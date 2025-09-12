export interface LeadsResponse {
  results: Lead[];
  paging: Paging;
  date_from: string;
  date_to: string;
}

export interface Paging {
  offset: number;
  limit: number;
  total: number;
}

export interface Lead {
  id: number;
  item_id: string;
  name: string;
  email: string;
  phone: string;
  leads: Contact[];
}

export interface Contact {
  id: string;
  contact_type: string;
  created_at: string;
  external_id: string;
  item_id: string;
  buyer_id: number;
  status: string;
}

export interface LeadsHttpRequest {
  offset?: number;
  limit?: number;
  date_from?: string;
  date_to?: string;
  contact_types?: string;
  item_id?: string;
  buyer_ids?: string;
}

export interface LeadsFormValue {
  offset: number;
  limit: number;
  startDate: Date;
  endDate: Date;
  contactTypes: string[];
  itemId: string;
  buyerIds: string[];
}
