import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export enum Status {
  ACTIVE = 1,
  INACTIVE = 0,
  BLOCK = -1,
}

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

	@Column({ type: Number, default: Status.INACTIVE })
  status: number

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
}
