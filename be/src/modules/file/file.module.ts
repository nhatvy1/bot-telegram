import { Module } from '@nestjs/common'
import { FileController } from './file.controller'
import { FileService } from './file.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileKeyword } from './file.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FileKeyword])],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
