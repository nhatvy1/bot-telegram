import { IsEnum, IsOptional } from 'class-validator'
import { Status } from 'src/modules/user/user.entity'

export class UpdateUserDto {
  @IsOptional({ message: 'Please enter your fullname' })
  fullName: string

  @IsOptional({ message: 'Please select a status' })
  @IsEnum(Status)
  status: number = Status.INACTIVE
}
