import { Injectable } from '@nestjs/common'
import { InjectBot } from 'nestjs-telegraf'
import { TelegrafContext } from 'src/common/interfaces/telegraf-context.interface'
import { Telegraf } from 'telegraf'

@Injectable()
export class MessageService {
  // constructor(@InjectBot() private bot: Telegraf<TelegrafContext>) {}
  sendMessage(text: string) {
    
  }
}
