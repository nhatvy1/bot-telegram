import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from '../auth/dto/create.user.dto'
import { Hash } from 'src/utils/hash'
import { LoginDto } from '../auth/dto/login.dto'
import { UpdateUserDto } from './dto/update.user.dto'
import { RoleService } from '../role/role.service'
import { roles } from 'src/utils/constant'
import { FilterUserDto } from './dto/filter.user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService
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
      const findCustomerRole = await this.roleService.getRoleByName(
        roles.CUSTOMER
      )

      const userToCreate = {
        ...createUser,
        password: hashPassword,
        role: findCustomerRole
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

  async getListUsers(filterUser: FilterUserDto) {
    try {
      const { limit, page, search } = filterUser
      const skip = (page - 1) * limit

      const [list, totalResults] = await this.userRepository.findAndCount({
        order: { createdAt: 'DESC' },
        take: limit,
        skip: skip,
        where: [
          { fullName: ILike(`%${search}%`) }, // Search within name
          { email: ILike(`%${search}%`) } // Search within email
        ]
      })
      
      return {
        result: list,
        totalResults: totalResults,
        limit: limit,
        page: page
      }
    } catch (e) {
      throw e
    }
  }

  async checkPermission(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
        relations: { role: true }
      })
      return user
    } catch(e) {
      throw e
    }
  }
}
