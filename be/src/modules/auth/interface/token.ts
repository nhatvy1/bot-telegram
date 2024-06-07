export interface Tokens {
  access_token: string
  refresh_token: string
}

export interface TokenVerify {
  userId: number
  fullName: string
  permission: { [key: string]: string[] }
  iat: number
  exp: number
  refreshToken: string
}
