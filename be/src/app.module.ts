import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { BotModule } from './modules/bot/bot.module'
import { ConfigModule } from '@nestjs/config'
import { ImageModule } from './modules/image/image.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileModule } from './modules/file/file.module'
import typeormConfig from './database/typeorm.config'
import { LoggerMiddleware } from './logger.middeware'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { RoleModule } from './modules/role/role.module'
import { PermissionModule } from './modules/permission/permission.module'

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
    ImageModule,
    UserModule,
    RoleModule, 
    PermissionModule,
    AuthModule
  ],
  providers: [LoggerMiddleware]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
