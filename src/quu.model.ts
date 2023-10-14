import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Quu {
  @Field()
  quu: string;
}
