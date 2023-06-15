import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { findOrder } from '../types/find-order.type';
import { FindEventsDto } from '../../events/dto/find-events.dto';
import { RRule, rrulestr } from 'rrule';
import { ErrorTypes } from './constants';

@Injectable()
export class ServiceHelper {
  getWhereByStartDateAndEndDate(startDate: Date, endDate: Date) {
    const start = new Date(startDate).toISOString();
    const end = new Date(endDate).toISOString();

    return {
      $or: [
        {
          $and: [
            { startDate: { $gte: start } },
            { startDate: { $lte: end } },
          ],
        },
        {
          $and: [
            { endDate: { $gte: start } },
            { endDate: { $lte: end } },
          ],
        },
        {
          $and: [
            { startDate: { $gte: start } },
            { endDate: { $lte: end } },
          ],
        },
      ],
    };
  }

  async findAllEvents<T extends { rrule: string }>(dto: FindEventsDto, repository: Repository<T>): Promise<{items: T[]}> {
    const { startDate, endDate, order, fieldSort }: FindEventsDto = dto;
    const $order: findOrder = { [fieldSort]: order };
    const $where = this.getWhereByStartDateAndEndDate(startDate, endDate);

    const result = await repository.find({
      where: $where,
      order: $order,
    });

    const filteredResults = result.filter((event) => {
      const rule = rrulestr(event.rrule);

      return rule.between(startDate, endDate);
    });

    return {
      items: filteredResults,
    };
  }

  getStartDateAndEndDate(rrule: string): { startDate: Date, endDate: Date } {
    const { origOptions: { dtstart, until } } = RRule.fromString(rrule);

    if (!dtstart || !until) {
      throw new BadRequestException(ErrorTypes.INVALID_RRULE_STRING);
    }

    if (new Date(dtstart) > new Date(until)) {
      throw new BadRequestException(ErrorTypes.INVALID_DATE_IN_RRULE_STRING);
    }

    const startDate = new Date(dtstart).toISOString() as unknown as Date;
    const endDate = new Date(until).toISOString() as unknown as Date;

    return { startDate, endDate };
  }
}
