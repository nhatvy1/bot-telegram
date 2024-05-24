import { Module } from '@nestjs/common'
import { BotUpdate } from './bot.update'

@Module({
  imports: [BotUpdate],
	exports: [BotUpdate]
})
export class BotModule {}
