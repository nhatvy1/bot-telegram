import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { Status } from 'src/modules/user/user.entity'

export class CreateUserDto {
  @IsNotEmpty({ message: 'Please enter your fullname' })
  fullName: string

  @IsNotEmpty({ message: 'Please enter your email' })
  @IsEmail({ }, { message: 'Please enter the correct email format' })
  email: string

  @IsNotEmpty({ message: 'Please enter your password'})
  password: string

  @IsOptional({ message: 'Please select a status' })
  @IsEnum(Status)
  status: number = Status.INACTIVE
}
