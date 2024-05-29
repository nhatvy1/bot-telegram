import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'
import { GreeterBotName } from './utils/constant'
import { session } from 'telegraf'
import { BotModule } from './modules/bot/bot.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    BotModule
  ]
})
export class AppModule {}
