import { Module } from '@nestjs/common'
import { BotModule } from './modules/bot/bot.module'
import { ConfigModule } from '@nestjs/config'
import { ImageModule } from './modules/image/image.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './modules/database/typeorm.config'
import { FileModule } from './modules/file/file.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    FileModule,
    BotModule,
    ImageModule
  ]
})
export class AppModule {}
