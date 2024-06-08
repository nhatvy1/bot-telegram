import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from './role.entity'
import { CreateRoleDto } from './dto/create.role.dto'
import { actionEnum } from '../permission/permission.entity'
import { PermissionService } from '../permission/permission.service'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    private readonly permissionService: PermissionService
  ) {}

  async createRole(createRoleDto: CreateRoleDto) {
    try {
      const { name, description, permissions } = createRoleDto
      const checkExistRole = await this.roleRepository.findOneBy({
        name: createRoleDto.name
      })

      if (checkExistRole) {
        throw new ConflictException('Role existed')
      }

      const result = this.roleRepository.create({
        name,
        description
      })
      const role = await this.roleRepository.save(result)

      for (const subject of Object.keys(permissions)) {
        permissions[subject].forEach((action: actionEnum) => {
          this.permissionService.createPermission({ action, subject, role })
        })
      }
      return role
    } catch (e) {
      throw e
    }
  }
}
