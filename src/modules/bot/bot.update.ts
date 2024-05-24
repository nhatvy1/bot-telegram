import { Update, Ctx, Start, Help, On, Hears, InjectBot } from 'nestjs-telegraf'
import { TelegrafContext } from 'src/types/telegraf-context.interface'
import { Telegraf } from 'telegraf'

@Update()
export class BotUpdate {
  constructor(
    @InjectBot()
    private readonly bot: Telegraf<TelegrafContext>
  ) {
    this.bot.telegram.setMyCommands([
      {
        command: 'help',
        description: 'Hướng dẫn sử dụng'
      },
      {
        command: 'start',
        description: 'Xin chào'
      },
      {
        command: 'getID',
        description: 'Lấy ID'
      }
    ])
    this.bot.catch((err) => console.log(err))
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

  @Hears('hi')
  async hears(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Hey there')
  }
}
