import type { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { db } from '../db';
import { Movie as MovieModel } from '../db/movieModel';
import { Movie as MovieEntity } from '../entities/movie';

export class Movie {
  public static async add(m: MovieEntity): Promise<string[] | InsertResult> {
    // 转换平面对象
    m = MovieEntity.transform(m);
    // 验证
    const err = await m.validateThis();
    if (err.length > 0) {
      return err;
    }
    // 数据库操作
    return await db
      .createQueryBuilder()
      .insert()
      .into(MovieModel)
      .values(m)
      .execute();
  }

  public static async update(
    id: number,
    m: object
  ): Promise<string[] | UpdateResult> {
    const temp = MovieEntity.transform(m);
    const err = await temp.validateThis(true);

    if (err.length) {
      return err;
    }

    return await db
      .createQueryBuilder()
      .update(MovieModel)
      .set(m)
      .where('id=:id', { id })
      .execute();
  }

  public static async delete(id: number): Promise<DeleteResult> {
    return await db
      .createQueryBuilder()
      .delete()
      .from(MovieModel)
      .where('id=:id', { id })
      .execute();
  }

  public static async findById(id: number): Promise<MovieModel | null> {
    return await db
      .getRepository(MovieModel)
      .createQueryBuilder()
      .where('id=:id', { id })
      .getOne();
  }
}
