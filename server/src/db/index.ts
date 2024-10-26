import { DataSource } from 'typeorm';
import { Movie } from './movieModel';

export const db = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'moviedb',
  entities: [Movie],
  synchronize: true,
});
