import { Module } from '@nestjs/common'
import { BotUpdate } from './bot.update'
import { TelegrafModule } from 'nestjs-telegraf'
import { session } from 'telegraf'
import { ImageModule } from '../image/image.module'

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: process.env.TELEGRAM_BOT_NAME,
      useFactory: () => ({
        token: '7077086443:AAHnF8hVhTC_m90rwSz8gvnD-vY6X0dtNKM',
        middlewares: [session()]
      })
    }),
    ImageModule
  ],
  providers: [BotUpdate]
})
export class BotModule {}
