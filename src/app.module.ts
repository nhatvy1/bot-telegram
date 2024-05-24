import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TOKEN'
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
