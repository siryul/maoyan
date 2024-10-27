import { IsInt, Min } from 'class-validator';
import type { Movie } from '../db/movieModel';

export abstract class Condition {
  @IsInt()
  @Min(0)
  offset?: number = 0;
  @IsInt()
  @Min(1)
  limit?: number = 10;

  where?: Partial<Movie> = {};
}

export interface IResult<T> {
  total: number;
  data: T[];
}
