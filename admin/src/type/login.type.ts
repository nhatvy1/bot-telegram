interface ILogin {
  email: string
  password: string
}

interface User {
  id: number
  email: string
}

interface IResLogin extends IResponseType {
  result: {
    access_token: string
    refresh_token: string
    user: User
  }
}
