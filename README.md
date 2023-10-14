# NestJS GraphQL Child Field Resolvers

This is a minimalistic repo to show how NestJS GraphQL resolvers only need to
be aware of their immediate children.

## The Setup

We have four classes, `Foo`,`Bar`, `Baz`, and `Quu`. `Foo` has a child of `Bar`.
`Bar` has a child of `Baz`. `Baz` has a child of `Quu`. Each class has a
property matching the class's name as a string and a property that matches the
child's name and class type.

```ts
@ObjectType()
export class Foo {
  @Field(() => String)
  foo: string;

  @Field(() => Bar)
  bar: Bar;
}
```

Each class has a resolver, and each resolver sets up the `@ResolveField()` for
its immediate child. This way, there's no "god class" that is aware of several
levels deep of fields to resolve.

## Running Locally

```
1. clone the repo
2. install using your package manager of choice. I uses pnpm
3. Start using the `start:dev` script
4. Go to http://localhost:3000/graphql
5. Play around with the queries.
```

An example query to get all the data would be

```graph
query {
  foo {
    foo
    bar {
      bar
      baz {
        baz
        quu {
          quu
        }
      }
    }
  }
}
```
