import { Field, ObjectType } from '@nestjs/graphql';
import { Quu } from './quu.model';

@ObjectType()
export class Baz {
  @Field()
  baz: string;

  @Field(() => Quu)
  quu: Quu;
}
