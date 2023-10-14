import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { Foo } from './foo.model';

@Resolver(() => Foo)
export class FooResolver {
  @Query(() => Foo)
  foo() {
    return {
      foo: 'hello!',
    };
  }
  @ResolveField()
  bar() {
    return {
      bar: 'bar!',
    };
  }
}
