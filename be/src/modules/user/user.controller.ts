import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ReqUser } from 'src/decorators/user.decorator';
import { JwtPayload } from '../auth/interface/jwt.payload';
import { Authentication } from 'src/decorators/authentication.decorator';

@Controller('user')
@Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  getProfile(@ReqUser() reqUser: JwtPayload) {
    try {
      console.log('Check: ', reqUser)
    } catch(e) {
      throw e
    }
  }
}
