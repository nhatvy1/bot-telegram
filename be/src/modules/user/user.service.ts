import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from '../auth/dto/create.user.dto'
import { Hash } from 'src/utils/hash'
import { LoginDto } from '../auth/dto/login.dto'
import { UpdateUserDto } from './dto/update.user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async getUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (!user) {
        throw new NotFoundException(`User not found`)
      }

      return user
    } catch (e) {
      throw e
    }
  }

  async createUser(createUser: CreateUserDto) {
    try {
      const foundUser = await this.userRepository.findOneBy({
        email: createUser.email
      })
      if (foundUser) {
        throw new ConflictException(`Email `)
      }

      const hashPassword = Hash.generateHash(createUser.password)
      // find Customer Role

      const userToCreate = {
        ...createUser,
        password: hashPassword
      }
      const user = this.userRepository.create(userToCreate)
      await this.userRepository.save(user)
      return user
    } catch (e) {
      throw e
    }
  }

  async updateUser(id: number, updateUser: UpdateUserDto) {
    try {
      const foundUser = await this.userRepository.findOneBy({
        id
      })
      if (!foundUser) {
        throw new ConflictException(`User not found `)
      }

      for (const key of Object.keys(updateUser)) {
        if (key !== 'email' && key !== 'password') {
          foundUser[key] = updateUser[key]
        }
      }

      await this.userRepository.save(foundUser)
      return foundUser
    } catch (e) {
      throw e
    }
  }

  async deleteUser(id: number) {
    try {
      const foundUser = await this.userRepository.findOneBy({
        id
      })
      if (!foundUser) {
        throw new ConflictException(`User not found `)
      }

      await this.userRepository.remove(foundUser)
      return foundUser
    } catch (e) {
      throw e
    }
  }

  async login(login: LoginDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: login.email },
        select: ['id', 'email', 'password']
      })
      if (!user) {
        throw new NotFoundException(`User not found`)
      }
      return user
    } catch (e) {
      throw e
    }
  }
}
