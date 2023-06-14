import { registerEnumType } from 'type-graphql';

export enum EventTypes {
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
}

registerEnumType(EventTypes, {
  name: 'EventTypes',
});


export enum ErrorTypes {
  INVALID_RRULE_STRING = 'Rrule string must include dtstart and until',
  INVALID_DATE_IN_RRULE_STRING = 'Invalid date in rrule string',
}
