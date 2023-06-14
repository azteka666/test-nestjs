import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { EventEntity } from '../entities/event.entity';

@EntityRepository(EventEntity)
export class EventRepository extends Repository<EventEntity> {}
