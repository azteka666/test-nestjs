import { ObjectId } from 'mongodb';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEntity } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { ListEventsEntity } from './entities/list-events.entity';
import { EventRepository } from './repositories/event.repository';
import { ServiceHelper } from '../common/helpers/service.helper';
import { UpdateEventInput } from './dto/update-event-input.dto';
import { FindEventDto } from '../common/dto/find-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly serviceHelper: ServiceHelper, private readonly eventRepository: EventRepository) {}

  async findEventById(id: string): Promise<EventEntity> {
    return await this.eventRepository.findOne({
      where: {
        _id: ObjectId(id),
      },
    });
  }

  async findEvents(params: FindEventDto): Promise<ListEventsEntity> {
    return await this.serviceHelper.findAllEvents(params, this.eventRepository);
  }

  async createEvent(event: CreateEventDto): Promise<EventEntity> {
    const { rrule } = event;

    const { startDate, endDate } = this.serviceHelper.getStartDateAndEndDate(rrule);

    return this.eventRepository.save({
      ...event,
      startDate,
      endDate,
    });
  }

  async updateEvent(id: string, event: UpdateEventInput): Promise<EventEntity> {
    const oldEvent = await this.findEventById(id);

    if (!oldEvent) {
      throw new NotFoundException(id);
    }

    const { rrule } = event;
    const data: EventEntity = {
      id,
      ...oldEvent,
      ...event,
    }

    if (rrule) {
      const { startDate, endDate } = this.serviceHelper.getStartDateAndEndDate(rrule);
      data.startDate = startDate;
      data.endDate = endDate;
    }

    return this.eventRepository.save(data);
  }

  async deleteEvent(id: string): Promise<boolean> {
    await this.eventRepository.delete(id);

    return true;
  }
}
