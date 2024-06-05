import { ConflictException, Injectable } from '@nestjs/common'
import { CreateFileDto } from './dto/create.file.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { FileKeyword } from './file.entity'
import { Repository } from 'typeorm'

@Injectable() 
export class FileService {
  constructor(
    @InjectRepository(FileKeyword)
    private readonly fileRepository: Repository<FileKeyword>
  ) {}

  async createFile(createFile: CreateFileDto, file: Express.Multer.File) {
    try {
      const checkFile = await this.fileRepository.findOneBy({ name: createFile.name })
      if(checkFile) {
        throw new ConflictException('Tiêu đề file đã tồn tại')
      }

      const newFile = this.fileRepository.create({
        ...createFile,
        link: file.path
      })
      await this.fileRepository.save(newFile)
      return file
    } catch(e){
      throw e
    }
  }
}
