import { Field, ObjectType, Int } from 'type-graphql';
import { IListItems } from '../../common/interfaces/list-items.interface';
import { EventEntity as Event } from './event.entity';

@ObjectType('ListEvents')
export class ListEventsEntity implements IListItems {
  @Field(type => [Event])
  items: Event[];
}
