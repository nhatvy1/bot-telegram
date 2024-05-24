import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { BotUpdate } from './modules/bot/bot.update';

let bot;
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  bot = app.get(BotUpdate);
  await app.listen(3000)
}
try {
  bootstrap()
} catch(e) {
  console.log(e)
}
