import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { Configurations } from './shared/config';

async function bootstrap() {
  const { PORT } = Configurations;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
