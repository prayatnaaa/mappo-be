import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 3306),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
  migrations: [join(process.cwd(), 'dist/db/migrations/*.js')],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
