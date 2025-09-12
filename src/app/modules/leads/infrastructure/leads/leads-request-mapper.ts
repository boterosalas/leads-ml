import { cleanObject } from '../../../../shared/helper/clean-object';
import { formatDate } from '../../../../shared/helper/format-date';
import {
  LeadsFormValue,
  LeadsHttpRequest,
} from '../../domain/models/leads.model';

export const leadsRequestMapper = (
  params: LeadsFormValue
): LeadsHttpRequest => {
  console.log({ params });
  const {
    startDate,
    endDate,
    contactTypes,
    itemId,
    buyerIds,
    offset = 0,
    limit = 10,
  } = params;
  return cleanObject({
    offset,
    limit,
    date_from: formatDate(
      startDate || new Date(new Date().setDate(new Date().getDate() - 7))
    ),
    date_to: formatDate(endDate || new Date()),
    contact_types: contactTypes && contactTypes.join(','),
    item_id: itemId,
    buyer_ids: buyerIds && buyerIds.join(','),
  });
};
