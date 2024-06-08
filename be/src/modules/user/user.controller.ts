import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put
} from '@nestjs/common'
import { UserService } from './user.service'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { Authentication } from 'src/decorators/authentication.decorator'
import { Response } from 'src/types/response.type'
import { UpdateUserDto } from './dto/update.user.dto'

@Controller('user')
@Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getProfile(@ReqUser() reqUser: JwtPayload) {
    try {
      const result = await this.userService.getUserById(reqUser.userId)
      return Response({
        message: 'Get profile successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: UpdateUserDto
  ) {
    try {
      const result = await this.userService.updateUser(id, updateUser)
      return Response({
        message: 'Update user successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Delete(':id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: UpdateUserDto
  ) {
    try {
      const result = await this.userService.deleteUser(id)
      return Response({
        message: 'Delete user successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }
}
