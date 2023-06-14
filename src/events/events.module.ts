import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { EventRepository } from './repositories/event.repository';
import { ServiceHelper } from '../common/helpers/service.helper';

@Module({
  imports: [TypeOrmModule.forFeature([EventRepository])],
  providers: [EventsService, EventsResolver, ServiceHelper],
})
export class EventsModule {}
