import { Module } from '@nestjs/common'
import { BotModule } from './modules/bot/bot.module'
import { ConfigModule } from '@nestjs/config'
import { ImageModule } from './modules/image/image.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    BotModule,
    ImageModule
  ]
})
export class AppModule {}
