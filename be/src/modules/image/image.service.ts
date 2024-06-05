import { Injectable } from '@nestjs/common'
import { createCanvas, loadImage } from 'canvas'
import * as fs from 'fs'
import * as moment from 'moment'
import * as path from 'path'

@Injectable()
export class ImageService {
  async editImage(urlFileLocal: string) {
    // Create a canvas and set its dimensions

    // Get absolute path
    // const absolutePath = path.resolve(__dirname, urlFileLocal)

    // Load the image onto the canvas
    loadImage(urlFileLocal)
      .then((image) => {
        const date = new Date()
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

        // Set font properties
        ctx.font =
          "normal 700 32px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"

        // ctx.fillStyle = '#fafafa'
        ctx.fillStyle = 'red'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Draw text onto the image
        ctx.fillText(moment(date).format('DD-MM-YYYY'), 100, 200)

        ctx.font =
          "normal 600 32px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"
        ctx.fillText('13', 572, 427)
        ctx.fillText('38', 659, 427)
        ctx.fillText('45', 745, 427)

        // Convert the canvas to a Buffer
        const buffer = canvas.toBuffer('image/jpeg')

        // Write the buffer to a file
        // fs.writeFileSync('output_image.jpg', buffer)
        fs.writeFileSync('./public/output_image.jpg', buffer)
        // console.log('Image with text saved!')
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }
}
