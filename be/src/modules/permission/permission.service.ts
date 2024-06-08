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
			console.log('Subject: ', subject)
			console.log('Action: ', action)
      const newPermissions = this.permissionRepository.create({
        action,
        subject
      })
			newPermissions.roles = [role]
			await this.permissionRepository.save(newPermissions)
			return newPermissions
    } catch (e) {
      throw e
    }
  }
}
