import { IsInt, Min } from 'class-validator';

export class Condition {
  @IsInt()
  @Min(0)
  offset: number = 0;
  @IsInt()
  @Min(1)
  limit: number = 10;
  where: string;
}
