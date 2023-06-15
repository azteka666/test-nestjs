import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { DateScalar } from './common/scalars/date.scalar';
import { RruleStringScalar } from './common/scalars/rruleString.scalar';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: process.env.NODE_ENV === 'development',
    }),
    EventsModule,
  ],
  providers: [DateScalar, RruleStringScalar],
})
export class AppModule {}
