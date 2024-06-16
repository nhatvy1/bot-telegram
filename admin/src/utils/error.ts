export class HttpError extends Error {
  status: number
  payload: {
    message: string
    [key: string]: any
  }

  constructor({ status, payload }: { status: number; payload: any }) {
    super(payload?.message || ' Hệ thống đang bảo trì')
    this.status = status
    this.payload = payload
  }
}
