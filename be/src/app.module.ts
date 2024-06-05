import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { BotModule } from './modules/bot/bot.module'
import { ConfigModule } from '@nestjs/config'
import { ImageModule } from './modules/image/image.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileModule } from './modules/file/file.module'
import typeormConfig from './database/typeorm.config'
import { LoggerMiddleware } from './logger.middeware'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    FileModule,
    // BotModule,
    ImageModule
  ],
  providers: [LoggerMiddleware]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
