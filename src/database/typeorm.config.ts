import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { FileKeyword } from "src/modules/file/file.entity";

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [FileKeyword],
  autoLoadEntities: true,
  synchronize: process.env.DB_SYNC === 'true',
})