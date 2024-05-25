import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'
import { GreeterBotName } from './utils/constant'
import { session } from 'telegraf'
import { BotModule } from './modules/bot/bot.module'

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: GreeterBotName,
      useFactory: () => ({
        token: '',
        middlewares: [session()],
        include: [BotModule]
      })
    }),
    BotModule
  ]
})
export class AppModule {}
