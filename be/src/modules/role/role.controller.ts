import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create.role.dto';
import { Response } from 'src/types/response.type';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('init-role')
  async createRole(@Body() createRole: CreateRoleDto) {
    try {
      const result = await this.roleService.createRole(createRole)
      return Response({ 
        message: 'Init role sucessfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }
}
