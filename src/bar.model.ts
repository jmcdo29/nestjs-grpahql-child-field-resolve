import { Field, ObjectType } from '@nestjs/graphql';
import { Baz } from './baz.model';

@ObjectType()
export class Bar {
  @Field()
  bar: string;

  @Field(() => Baz)
  baz: Baz;
}
