interface IUser {
  id: number
  fullName: string
  avatar: string
  email: string
  status: number
}

interface IResListUsers extends IResponseType {
  result: {
    result: IUser[]
    totalResults: number
    limit: number
    page: number
  }
}
