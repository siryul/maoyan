import type { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { db } from '../db';
import { Movie as MovieModel } from '../db/movieModel';
import { Movie as MovieEntity } from '../entities/movie';
import { transform, validateParam } from '../decorator';
import type { Condition } from '../types';

export class Movie {
  @validateParam(MovieEntity)
  public static async add(
    @transform m: object
  ): Promise<string[] | InsertResult> {
    return await db
      .createQueryBuilder()
      .insert()
      .into(MovieModel)
      .values(m)
      .execute();
  }

  @validateParam(MovieEntity, true)
  public static async update(
    id: number,
    @transform m: object
  ): Promise<string[] | UpdateResult> {
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

  public static async find({
    offset = 0,
    limit = 10,
    where,
  }: Condition): Promise<{
    total: number;
    movies: MovieModel[];
  }> {
    let whereSeq: string[] = [];

    where &&
      Object.keys(where).forEach((k) => {
        whereSeq.push(`${k} = :${k}`);
      });

    const queryBuilder = db
      .getRepository(MovieModel)
      .createQueryBuilder()
      .where(whereSeq.join(' AND '), where);

    const movies = await queryBuilder
      .skip(offset * limit)
      .take(limit)
      .getMany();
    const total = await queryBuilder.getCount();

    return { total, movies };
  }
}
