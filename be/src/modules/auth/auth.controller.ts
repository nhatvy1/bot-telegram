import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create.user.dto';
import { Response } from 'src/types/response.type';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUser: CreateUserDto) {
    try {
      const result = await this.authService.register(createUser)
      return Response({
        message: 'Register successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Post('login')
  async login(@Body() login: LoginDto) {
    try {
      const result = await this.authService.login(login)
      return Response({
        message: 'Login successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }
}
