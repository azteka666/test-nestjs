import { IsEnum, IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';
import { EventTypes } from '../../common/helpers/constants';
import { RruleStringScalar } from '../../common/scalars/rruleString.scalar';

@ArgsType()
export class CreateEventDto {
  @Field(type => EventTypes)
  @IsEnum(EventTypes)
  type: EventTypes;

  @Field(type => RruleStringScalar)
  @IsString()
  rrule: string;
}
