import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  console.log(`Database host: ${configService.get('DATABASE_HOST')}`);
  await app.listen(3000);
}
bootstrap();
