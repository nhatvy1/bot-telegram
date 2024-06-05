import { Controller, Get } from '@nestjs/common';
import { ImageService } from './image.service';
import moment from 'moment';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getImage() {
    const date = moment(new Date()).format('DD-MM-YYYY')
    return { msg: date }
  }
}
