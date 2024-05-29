import {
  Update,
  Ctx,
  Start,
  Help,
  On,
  Hears,
  InjectBot,
  Command,
  Message
} from 'nestjs-telegraf'
import { TelegrafContext } from 'src/types/telegraf-context.interface'
import { Telegraf } from 'telegraf'
import { COMMANDS } from './bot.action'
import { ReverseTextPipe } from 'src/types/pipe/reverse-text.pipe'

@Update()
export class BotUpdate {
  constructor(@InjectBot() private readonly bot: Telegraf<TelegrafContext>) {
    this.bot.telegram.setMyCommands(COMMANDS)
  }

  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Welcome')
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Send me a sticker')
  }

  @On('sticker')
  async onSticker(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('👍')
  }

  @On(['text'])
  async onTextMessage(
    @Message('text') text: string,
    @Ctx() ctx: TelegrafContext
  ) {
    let message = ''
    if(text === 'abc') {
      message = 'Xin chào các bạn'
    }
    console.log('adfsafdsf')
    // await ctx.reply(message)
  }

  @Hears(['hi', 'hello', 'fox'])
  async hears(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Xao chìn 😛😛😛😛😛😛😛😛😛😛')
  }
}
