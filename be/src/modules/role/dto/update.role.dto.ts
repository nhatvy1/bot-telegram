import { IsNotEmpty, IsOptional } from 'class-validator'
import { actionEnum } from 'src/modules/permission/permission.entity'

export class UpdateRoleDto {
  @IsNotEmpty({ message: 'Please enter your role name' })
  name: string

  @IsOptional({ message: 'Please enter a descript of the role' })
  description: string

  @IsNotEmpty({ message: 'Please select permissions' })
  permissions: { [key: string]: actionEnum[] }
}
