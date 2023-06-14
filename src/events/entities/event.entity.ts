import {
  Field,
  ID,
  ObjectType,
} from 'type-graphql';
import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { EventTypes } from '../../common/helpers/constants';
import { RruleStringScalar } from '../../common/scalars/rruleString.scalar';

@Entity('Event')
@ObjectType('Event')
export class EventEntity {
  @Field(type => ID)
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Field(type => EventTypes)
  @Column({
    type: 'enum',
    enum: EventTypes,
  })
  type: EventTypes;

  @Field(type => Date)
  @Column({ type: 'timestamptz' })
  @Index()
  startDate: Date;

  @Field(type => Date)
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @Field(type => RruleStringScalar)
  @Column({
    type: 'string',
  })
  rrule: string;

  @Field(type => Date)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field(type => Date)
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
