import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/modules/auth/auth.service'
import { actionEnum } from 'src/modules/permission/permission.entity'
import { RoleService } from 'src/modules/role/role.service'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private roleService: RoleService
  ) {}

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean>{
    const action = this.reflector.getAllAndOverride<actionEnum>('action', [
      context.getHandler(),
      context.getClass()
    ])

    const subject = this.reflector.getAllAndOverride<string>('subject', [
      context.getHandler(),
      context.getClass()
    ])

    const { user } = context.switchToHttp().getRequest()
    const role = await this.roleService.getRoleById(1)
    console.log('Check roleeee: ', role)
    return true
  }
}
