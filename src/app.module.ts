import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FooResolver } from './foo.resolver';
import { BarResolver } from './bar.resolver';
import { BazResolver } from './baz.resolver';
import { QuuResolver } from './quu.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FooResolver, BarResolver, BazResolver, QuuResolver],
})
export class AppModule {}
