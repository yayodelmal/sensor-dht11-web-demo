import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir conexiones desde cualquier origen
  app.enableCors({
    origin: '*', // Permitir todas las fuentes (puedes ajustarlo según tus necesidades)
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}
bootstrap();
