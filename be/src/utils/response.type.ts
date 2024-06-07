import { HttpStatus } from '@nestjs/common'

interface ResponseType<T> {
  message: string
  statusCode: HttpStatus
  result?: T
}
export const Response = <T>({
  statusCode,
  message,
  result
}: ResponseType<T>) => {
  return {
    message,
    statusCode,
    result: result || {} || undefined
  }
}
