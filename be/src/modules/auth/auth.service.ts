import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { CreateUserDto } from './dto/create.user.dto'
import { LoginDto } from './dto/login.dto'
import { Hash } from 'src/utils/hash'
import { JwtPayload } from './interface/jwt.payload'
import { TokenVerify, Tokens } from './interface/token'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(userId: number, fullName: string): Promise<Tokens> {
    const payload: JwtPayload = { userId, fullName }
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_JWT_SECRET,
        expiresIn: process.env.REFRESH_JWT_EXPIRES
      })
    ])

    return { access_token: access_token, refresh_token: refresh_token }
  }

  async register(createUser: CreateUserDto) {
    try {
      const user = await this.userService.createUser(createUser)
      delete user.password
      return user
    } catch (e) {
      throw e
    }
  }

  async refreshToken(tokenVerify: TokenVerify) {
    const { access_token, refresh_token } = await this.generateToken(
      tokenVerify.userId,
      tokenVerify.fullName
    )
    return { access_token, refresh_token }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.login(loginDto)
      const isValidPassword = Hash.compare(loginDto.password, user.password)

      if (!isValidPassword) {
        throw new UnauthorizedException('Email or password incorrect')
      }

      const { access_token, refresh_token }: Tokens = await this.generateToken(
        user.id,
        user.fullName
      )

      delete user.password
			return { user, access_token, refresh_token }
    } catch (e) {
      throw e
    }
  }
}
