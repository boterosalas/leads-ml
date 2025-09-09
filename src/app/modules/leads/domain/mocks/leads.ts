import { LeadsResponse, Lead } from '../models/leads.model';
import { v4 as uuidv4 } from 'uuid';

export const MockLeadsResponse: LeadsResponse = {
  results: generateLeads(100),
  paging: {
    offset: 0,
    limit: 10,
    total: 100,
  },
  date_from: '2024-05-14',
  date_to: '2024-05-24',
};

function generateLeads(count: number): Lead[] {
  const leads: Lead[] = [];

  for (let i = 0; i < count; i++) {
    const userId = Math.floor(Math.random() * 1_000_000);
    const itemId = `MLA${Math.floor(Math.random() * 1_000_000_000)}`;

    const user: Lead = {
      id: userId,
      item_id: itemId,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `+54${Math.floor(10000000 + Math.random() * 89999999)}`,
      leads: [
        {
          id: uuidv4(),
          contact_type: 'question',
          created_at: new Date().toISOString(),
          external_id: `${Math.floor(Math.random() * 1_000_000_000)}`,
          item_id: itemId,
          buyer_id: userId,
          status: 'active',
        },
      ],
    };

    leads.push(user);
  }

  return leads;
}
