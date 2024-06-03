import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFileDto {
  @IsNotEmpty({ message: 'Vui lòng nhập tiêu đề file'})
  name: string

  @IsOptional({ message: 'Vui lòng chọn chế độ hiển thị' })
  isShow: boolean = true

  @IsNotEmpty({ message: 'Vui lòng nhập dánh sách từ khóa' })
  keywords: string[]
}