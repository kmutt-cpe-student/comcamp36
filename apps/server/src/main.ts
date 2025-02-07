import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Comcamp36 API')
    .setDescription('Our lovely reference for Comcamp36 Website')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  fs.writeFileSync('./openapi.json', JSON.stringify(documentFactory()));

  app.use(
    '/reference',
    apiReference({
      spec: {
        content: documentFactory,
      },
    }),
  );

  app.useLogger(app.get(Logger));

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
      credentials: true,
    });
  } else {
    app.enableCors({
      origin: 'https://comcamp.io',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
      credentials: true,
    });
  }

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
