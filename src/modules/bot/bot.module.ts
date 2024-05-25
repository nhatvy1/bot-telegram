import { Module } from '@nestjs/common'
import { BotUpdate } from './bot.update'
import { TelegrafModule } from 'nestjs-telegraf'
import { session } from 'telegraf'

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: process.env.TELEGRAM_BOT_NAME,
      useFactory: () => ({
        token: process.env.TELEGRAM_BOT_TOKEN,
        middlewares: [session()],
        // include: [BotModule]
      })
    })
  ],
  providers: [BotUpdate]
})
export class BotModule {}
