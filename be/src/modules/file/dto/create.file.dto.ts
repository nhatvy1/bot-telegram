import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFileDto {
  @IsNotEmpty({ message: 'Please enter file title' })
  name: string

  @IsOptional({ message: 'Please select display mode' })
  isShow: boolean = true

  @IsNotEmpty({ message: 'Please enter your keywords' })
  keywords: string[]
}