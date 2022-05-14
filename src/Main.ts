import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { Configurations } from './shared/config';
import { ClassValidationPipe } from './shared/pipes/ClassValidationPipe';

async function bootstrap() {
  const { port } = Configurations;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ClassValidationPipe())

  await app.listen(port);
}
bootstrap();
