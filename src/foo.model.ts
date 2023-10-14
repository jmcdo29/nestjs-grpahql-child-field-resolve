import { Field, ObjectType } from '@nestjs/graphql';
import { Bar } from './bar.model';

@ObjectType()
export class Foo {
  @Field()
  foo: string;

  @Field(() => Bar)
  bar: Bar;
}
