import { IsMongoId } from 'class-validator';
import { ID, Field, ArgsType } from 'type-graphql';
import { UpdateEventInput } from './update-event-input.dto';

@ArgsType()
export class UpdateEventDto {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  id: string;

  @Field()
  eventInput: UpdateEventInput;
}
