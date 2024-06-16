import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
  Query
} from '@nestjs/common'
import { UserService } from './user.service'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { Authentication } from 'src/decorators/authentication.decorator'
import { Response } from 'src/types/response.type'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/filter.user.dto'
import { Authorization } from 'src/decorators/authorization.decorator'
import { actionEnum } from '../permission/permission.entity'

@Controller('user')
// @Authentication()
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

  @Get('')
  // @Authorization('user', actionEnum.READ)
  async getListUsers(@Query() filterUser: FilterUserDto) {
    try {
       const result = await this.userService.getListUsers(filterUser)
       return Response({
        message: 'Get list users successfully',
        statusCode: HttpStatus.OK,
        result
       })
    } catch(e) {
      throw e
    }
  }
}
