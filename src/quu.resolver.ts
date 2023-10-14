import { Resolver, Query } from '@nestjs/graphql';
import { Quu } from './quu.model';

@Resolver(() => Quu)
export class QuuResolver {
  @Query(() => Quu)
  quu() {
    return {
      quu: 'hello!',
    };
  }
}
