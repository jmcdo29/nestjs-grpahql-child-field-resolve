import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { Baz } from './baz.model';

@Resolver(() => Baz)
export class BazResolver {
  @Query(() => Baz)
  baz() {
    return {
      baz: 'hello!',
    };
  }
  @ResolveField()
  quu() {
    return {
      quu: 'This is in the baz resover',
    };
  }
}
