import { Update, Ctx, Start, Help, On, Hears, InjectBot } from 'nestjs-telegraf'
import { TelegrafContext } from 'src/types/telegraf-context.interface'
import { Telegraf } from 'telegraf'
import { COMMANDS } from './bot.action'

@Update()
export class BotUpdate {
  constructor(@InjectBot('huynh') private readonly bot: Telegraf<TelegrafContext>) {
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
  async on(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('👍')
  }

  @Hears(['/hi', 'hello', 'fox'])
  async hears(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Hey there')
  }
}
