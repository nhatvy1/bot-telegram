import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dto/create.role.dto'
import { Response } from 'src/types/response.type'
import { UpdateRoleDto } from './dto/update.role.dto'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('')
  async createRole(@Body() createRole: CreateRoleDto) {
    try {
      const result = await this.roleService.createRole(createRole)
      return Response({
        message: 'Init role sucessfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put(':id')
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto
  ) {
    try {
      const result = await this.roleService.updateRole(id, updateRoleDto)
      return Response({
        message: 'Update role successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get()
  async getRoleByName() {
    try {
      const result = await this.roleService.getRoleByName()
      return Response({
        message: 'Get role by name successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }
}
