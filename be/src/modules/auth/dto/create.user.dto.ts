import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Status } from "src/modules/user/user.entity";

export class CreateUserDto {
    @IsNotEmpty()
    fullName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsOptional()
    @IsEnum(Status)
    status: number = Status.INACTIVE
}