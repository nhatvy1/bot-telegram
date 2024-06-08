import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role/role.entity'

export enum actionEnum {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage'
}

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  subject: String

  @Column({ type: 'enum', enum: actionEnum, nullable: false })
  action: actionEnum

	@ManyToMany(()=> Role, (role)=> role.permissions)
	roles: Role[]
}
