import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { EventTypes } from '../../common/helpers/constants';
import { RruleStringScalar } from '../../common/scalars/rruleString.scalar';

@InputType('UpdateEventInput')
export class UpdateEventInput {
  @Field(type => EventTypes, { nullable: true })
  @IsOptional()
  @IsEnum(EventTypes)
  type?: EventTypes;

  @IsOptional()
  @Field(type => RruleStringScalar, { nullable: true })
  @IsString()
  rrule?: string;
}
