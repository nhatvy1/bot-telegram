import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = 7979

  app.setGlobalPrefix('api/v1')

  await app.listen(port, () => console.log(`App is running on port ${port}`))
}

bootstrap()
