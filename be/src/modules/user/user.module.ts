import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AccessTokenStrategy } from 'src/strategies/access-token.stategy';
import { RefreshTokenStrategy } from 'src/strategies/refresh-token.stategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [UserService]
})
export class UserModule {}
