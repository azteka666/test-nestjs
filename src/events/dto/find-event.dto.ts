import { IsDateString } from 'class-validator';
import { ArgsType, Field, Int, ID } from 'type-graphql';
import { order } from '../../common/types/order.type';

@ArgsType()
export class FindEventDto {
  @Field()
  @IsDateString()
  startDate: Date;

  @Field()
  @IsDateString()
  endDate: Date;

  @Field(type => String, { nullable: true })
  order?: order = 'DESC';

  @Field({ nullable: true })
  fieldSort?: string = 'updatedAt';
}
