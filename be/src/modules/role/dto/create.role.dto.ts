import { IsNotEmpty } from "class-validator";
import { actionEnum } from "src/modules/permission/permission.entity";

export class CreateRoleDto {
    @IsNotEmpty({ message: 'Please enter your role name' })
    name: string

    @IsNotEmpty({ message: 'Please enter a descript of the role' })
    description: string

    @IsNotEmpty({ message: 'Please select permissions' })
    permissions: { [key: string]: actionEnum[]}
}