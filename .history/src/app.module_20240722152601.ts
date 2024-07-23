import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envVarsSchema from './config/config-validation.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envVarsSchema,
      validationOptions: {
        //allowUnknown: false,
        abortEarly: true,
      },
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // playground: true,
      // sortSchema: true,
      //autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const database = configService.get('database');

        return {
          type: 'mysql',
          ...database,
          entities: [],
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
