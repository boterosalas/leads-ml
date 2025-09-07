export interface LeadsResponse {
  results:   Result[];
  paging:    Paging;
  date_from: Date;
  date_to:   Date;
}

export interface Paging {
  offset: number;
  limit:  number;
  total:  number;
}

export interface Result {
  id:      number;
  item_id: string;
  name:    string;
  email:   string;
  phone:   string;
  leads:   Lead[];
}

export interface Lead {
  id:           string;
  contact_type: string;
  created_at:   Date;
  external_id:  string;
  item_id:      string;
  buyer_id:     number;
  status:       string;
}

