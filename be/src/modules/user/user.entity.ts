import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role/role.entity'

export enum Status {
  ACTIVE = 1,
  INACTIVE = 0,
  BLOCK = -1
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false, unique: true })
  email: string

  @Column({ type: String, nullable: false })
  fullName: string

  @Column({ type: String, select: false, nullable: false })
  password: string

  @Column({
    default:
      'https://res.cloudinary.com/metavere/image/upload/v1704893372/qxrnz99z7vs9oi2wccis.jpg'
  })
  avatar: string

  @Column({ type: 'enum', enum: Status, default: Status.INACTIVE })
  status: Status

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ManyToOne(()=> Role, (role)=> role.id)
  @JoinColumn({ name: 'role' })
  role: Role
}
