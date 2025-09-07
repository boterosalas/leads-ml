export interface User {
  id:                       number;
  nickname:                 string;
  registration_date:        Date;
  first_name:               string;
  last_name:                string;
  gender:                   string;
  country_id:               string;
  email:                    string;
  identification:           Identification;
  address:                  Address;
  phone:                    Phone;
  alternative_phone:        Phone;
  user_type:                string;
  tags:                     string[];
  logo:                     null;
  points:                   number;
  site_id:                  string;
  permalink:                string;
  seller_experience:        string;
  bill_data:                BillData;
  seller_reputation:        SellerReputation;
  buyer_reputation:         BuyerReputation;
  status:                   Status;
  secure_email:             string;
  company:                  Company;
  credit:                   Credit;
  context:                  Context;
  registration_identifiers: RegistrationIdentifier[];
}

export interface Address {
  address:  null;
  city:     null;
  state:    null;
  zip_code: null;
}

export interface Phone {
  area_code: string;
  extension: string;
  number:    string;
  verified?: boolean;
}

export interface BillData {
  accept_credit_note: null;
}

export interface BuyerReputation {
  canceled_transactions: number;
  tags:                  null;
  transactions:          BuyerReputationTransactions;
}

export interface BuyerReputationTransactions {
  canceled:      Canceled;
  completed:     null;
  not_yet_rated: NotYetRated;
  period:        string;
  total:         null;
  unrated:       Canceled;
}

export interface Canceled {
  paid:  null;
  total: null;
}

export interface NotYetRated {
  paid:  null;
  total: null;
  units: null;
}

export interface Company {
  brand_name:      string;
  city_tax_id:     string;
  corporate_name:  string;
  identification:  string;
  state_tax_id:    string;
  cust_type_id:    string;
  soft_descriptor: string;
}

export interface Context {
  device:     string;
  flow:       string;
  ip_address: string;
  source:     string;
}

export interface Credit {
  consumed:        number;
  credit_level_id: string;
  rank:            string;
}

export interface Identification {
  number: string;
  type:   string;
}

export interface RegistrationIdentifier {
  user_identifier:   string;
  registration_type: string;
  creation_date:     Date;
  last_updated:      Date;
  metadata:          Metadata;
}

export interface Metadata {
  country_code: string;
  number:       string;
}

export interface SellerReputation {
  level_id:            null;
  power_seller_status: null;
  transactions:        SellerReputationTransactions;
  metrics:             Metrics;
}

export interface Metrics {
  sales:                 Sales;
  claims:                Cancellations;
  delayed_handling_time: Cancellations;
  cancellations:         Cancellations;
}

export interface Cancellations {
  period: string;
  rate:   number;
  value:  number;
}

export interface Sales {
  period:    string;
  completed: number;
}

export interface SellerReputationTransactions {
  canceled:  number;
  completed: number;
  period:    string;
  ratings:   Ratings;
  total:     number;
}

export interface Ratings {
  negative: number;
  neutral:  number;
  positive: number;
}

export interface Status {
  billing:                  Billing;
  buy:                      Buy;
  confirmed_email:          boolean;
  shopping_cart:            ShoppingCart;
  immediate_payment:        boolean;
  list:                     Buy;
  mercadoenvios:            string;
  mercadopago_account_type: string;
  mercadopago_tc_accepted:  boolean;
  required_action:          string;
  sell:                     Buy;
  site_status:              string;
  user_type:                null;
}

export interface Billing {
  allow: boolean;
  codes: string[];
}

export interface Buy {
  allow:             boolean;
  codes:             string[];
  immediate_payment: ImmediatePayment;
}

export interface ImmediatePayment {
  reasons:  any[];
  required: boolean;
}

export interface ShoppingCart {
  buy:  string;
  sell: string;
}
