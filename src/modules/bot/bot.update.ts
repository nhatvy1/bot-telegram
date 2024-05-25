import {
    Update,
    Ctx,
    Start,
    Help,
    On,
    Hears,
  } from 'nestjs-telegraf';
import { TelegrafContext } from 'src/types/telegraf-context.interface';

  
  @Update()
  export class BotUpdate {
    @Start()
    async start(@Ctx() ctx: TelegrafContext) {
      await ctx.reply('Welcome');
    }
  
    @Help()
    async help(@Ctx() ctx: TelegrafContext) {
      await ctx.reply('Send me a sticker');
    }
  
    @On('sticker')
    async on(@Ctx() ctx: TelegrafContext) {
      await ctx.reply('👍');
    }
  
    @Hears('hi')
    async hears(@Ctx() ctx: TelegrafContext) {
      await ctx.reply('Hey there');
    }
  }