import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Permission } from '../permission/permission.entity'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  name: string

  @Column({ type: String, nullable: false })
  description: string

  @ManyToMany(() => Permission, (permission) => permission.roles, {
    onDelete: 'CASCADE'
  })
  @JoinTable({ name: 'role_permission' })
  permissions: Permission[]
}
