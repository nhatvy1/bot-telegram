import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'
import { BotModule } from './modules/bot/bot.module'
import { session } from 'telegraf'
import { TOKEN_TELEGRAM } from './utils/constant'


@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [session()],
      token: '7077086443:AAHnF8hVhTC_m90rwSz8gvnD-vY6X0dtNKM',
    }),
    BotModule
  ],
  providers: []
})
export class AppModule {}
