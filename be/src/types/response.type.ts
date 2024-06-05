import { HttpStatus } from "@nestjs/common"

interface ResponseType <T>{
  message: string
  statusCode: HttpStatus,
  result: T
}
export const Response = <T>({ message, statusCode, result}: ResponseType<T>) => {
  return {
    statusCode: statusCode,
    message: message,
    result: result || {}
  }
}