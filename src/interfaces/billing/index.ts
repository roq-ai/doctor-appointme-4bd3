import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  invoice_amount?: number;
  user_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
