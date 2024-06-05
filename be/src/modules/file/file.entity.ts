import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class FileKeyword {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  name: string

  @Column({ type: Boolean, default: true})
  isShow: boolean

  @Column({ type: String, nullable: false })
  link: string

  @Column({ type: 'simple-array', nullable: false })
  keywords: string[]
}
