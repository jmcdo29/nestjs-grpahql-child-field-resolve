import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { Bar } from './bar.model';
import { Baz } from './baz.model';

@Resolver(() => Bar)
export class BarResolver {
  @Query(() => Bar)
  bar() {
    return {
      bar: 'hello!',
    };
  }
  @ResolveField(() => Baz)
  baz() {
    return {
      baz: 'baz',
    };
  }
}
