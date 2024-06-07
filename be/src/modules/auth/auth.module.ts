import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: (): JwtModuleOptions => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
