import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Comcamp36 API')
    .setDescription('Our lovely reference for Comcamp36 Website')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use(
    '/reference',
    apiReference({
      spec: {
        content: documentFactory,
      },
    }),
  );

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
