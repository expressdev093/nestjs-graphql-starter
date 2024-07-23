import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import envVarsSchema from './config/config-validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envVarsSchema,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
      // load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
