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

  public static async find(
    condition: Condition
  ): Promise<{ count: number; movies: MovieModel[] }> {
    return {
      count: 0,
      movies: [],
    };
  }
}
