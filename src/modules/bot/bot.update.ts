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
import { ImageService } from '../image/image.service'
import { listMenu } from 'src/utils/constant'
@Update()
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<TelegrafContext>,
    private readonly imageService: ImageService
  ) {
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

  // @On(['text'])
  // async onTextMessage(
  //   @Message('text') text: string,
  //   @Ctx() ctx: TelegrafContext
  // ) {
  //   await ctx.reply('Xin chào nhật vỹ huỳnh')
  // }

  @Hears(['hi', 'hello', 'fox'])
  async hears(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Xao chìn 😛😛😛😛😛😛😛😛😛😛')
  }

  @Command('help')
  async sendMessage(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Đây là lệnh trợ giúp.')
  }

  @Command(COMMANDS.map((item) => item.description))
  async sendImage(@Ctx() ctx: TelegrafContext, @Message('text') text: string) {
    try {
      const menuItem = listMenu.find(item => item.text === text)
      if(menuItem) {
        await this.imageService.editImage(menuItem.linkImage)
        const inputFile = { source: './public/output_image.jpg' }
        await ctx.telegram.sendPhoto(ctx.from.id, inputFile)
      } else {
        await ctx.reply('Send image')
      }
    } catch (e) {
      console.log(e)
      await ctx.reply('Đã có lỗi xảy ra')
    }
  }
}
