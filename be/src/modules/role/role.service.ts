import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from './role.entity'
import { CreateRoleDto } from './dto/create.role.dto'
import { actionEnum } from '../permission/permission.entity'
import { PermissionService } from '../permission/permission.service'
import { UpdateRoleDto } from './dto/update.role.dto'

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

  async updateRole(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      const { name, description, permissions } = updateRoleDto
      const checkExistRole = await this.roleRepository.findOne({
        where: { id },
        relations: { permissions: true }
      })

      if (!checkExistRole) {
        throw new NotFoundException('Role not found')
      }

      let permissionCurrent = [...checkExistRole.permissions]
      for (const subject of Object.keys(permissions)) {
        permissions[subject].forEach((action: actionEnum) => {
          this.permissionService.createPermission({
            action,
            subject,
            role: checkExistRole
          })
          permissionCurrent = permissionCurrent.filter(
            (p) => !(p.action === action && p.subject === subject)
          )
        })
      }

      permissionCurrent.forEach(async (permission) => {
        checkExistRole.permissions = checkExistRole.permissions.filter(
          (p) => p.id !== permission.id
        )
      })
      await this.roleRepository.save(checkExistRole)
      return checkExistRole
    } catch (e) {
      throw e
    }
  }

  async getRoleByName() {
    try {
      const role = await this.roleRepository.findOne({
        where: { name: 'admin' },
        relations: { permissions: true }
      })
      if (!role) {
        throw new NotFoundException('Role not found')
      }
      return role
    } catch (e) {
      throw e
    }
  }
}