import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Permission, actionEnum } from './permission.entity'
import { Repository } from 'typeorm'
import { Role } from '../role/role.entity'

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {}

  async createPermission({
    action,
    subject,
    role
  }: {
    action: actionEnum
    subject: string
    role: Role
  }) {
    try {
      const permission = await this.permissionRepository.findOne({
        where: {
          action: action,
          subject: subject,
          roles: { id: role.id }
        }
      })
      if (permission) {
        return permission
      } else {
        const checkExistPermission = await this.permissionRepository.findOne({
          where: {
            action: action,
            subject: subject
          },
          relations: { roles: true }
        })
        if (checkExistPermission) {
          checkExistPermission.roles = [
            ...(checkExistPermission?.roles || []),
            role
          ]
          return this.permissionRepository.save(checkExistPermission)
        } else {
          const newPermission = this.permissionRepository.create({
            action: action,
            subject: subject
          })
          newPermission.roles = [...(newPermission?.roles || []), role]
          await this.permissionRepository.save(newPermission)
          return newPermission
        }
      }
    } catch (e) {
      throw e
    }
  }
}
