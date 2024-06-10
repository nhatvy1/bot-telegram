import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { CreateFileDto } from './dto/create.file.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { FileService } from './file.service'
import { Response } from 'src/utils/response.type'

export const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0]
    const extension = extname(file.originalname)
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('')
    cb(null, `${name}-${randomName}${extension}`)
  }
})

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  async createFile(@Body() createFile: CreateFileDto, @UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.fileService.createFile(createFile, file)
      return Response({
        message: 'Upload file success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get('')
  async getFile() {
    try {
      const result = await this.fileService.getFile()
    } catch(e) {
      throw e
    }
  }
}
