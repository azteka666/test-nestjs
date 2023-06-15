import { ID } from 'type-graphql';
import { NotFoundException } from '@nestjs/common';
import { Query, Mutation, Args, Resolver } from '@nestjs/graphql';
import { EventEntity as Event } from './entities/event.entity';
import { ListEventsEntity as ListEvents } from './entities/list-events.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FindEventsDto } from './dto/find-events.dto';
import { EventsService } from './events.service';

@Resolver(of => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(returns => Event)
  async event(@Args('id') id: string): Promise<Event> {
    const event = await this.eventsService.findEventById(id);

    if (!event) {
      throw new NotFoundException(id);
    }

    return event;
  }

  @Query(returns => ListEvents)
  events(@Args() queryArgs: FindEventsDto): Promise<ListEvents> {
    return this.eventsService.findEvents(queryArgs);
  }

  @Mutation(returns => Event)
  async saveEvent(@Args() mutationArgs: CreateEventDto): Promise<Event> {
    return this.eventsService.createEvent(mutationArgs);
  }

  @Mutation(returns => Event)
  updateEvent(@Args() mutationArgs: UpdateEventDto): Promise<Event> {
    const { id, eventInput } = mutationArgs;

    return this.eventsService.updateEvent(id, eventInput);
  }

  @Mutation(returns => Boolean)
  deleteEvent(@Args({ name: 'id', type: () => ID }) id: string): Promise<boolean> {
    return this.eventsService.deleteEvent(id);
  }
}
