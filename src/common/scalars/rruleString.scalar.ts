import { Validator } from 'class-validator';
import { RRule } from 'rrule';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode, GraphQLError } from 'graphql';

@Scalar('RruleString')
export class RruleStringScalar implements CustomScalar<string, string> {
  description = 'RruleString custom scalar type';

  private validator: Validator;

  constructor() {
    this.validator = new Validator();
  }

  parseValue(value: string): string {
    if (RRule.parseString(value)) {
      return value;
    }

    throw new TypeError(`Value is not a valid rrule string: ${value}`);
  }

  serialize(value: string): string {
    if (RRule.parseString(value)) {
      return value;
    }

    throw new TypeError(`Value is not a valid rrule string: ${value}`);
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Can only validate strings as rrule string but got a: ${ast.kind}`);
    }

    if (!RRule.parseString(ast.value)) {
      throw new TypeError(`Value is not a valid rrule string: ${ast.value}`);
    }

    return ast.value;
  }
}
