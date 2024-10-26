import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
} from 'class-validator';

export class Movie {
  @IsNotEmpty()
  @Type(() => String)
  public name: string;

  @ArrayMinSize(1)
  @IsNotEmpty()
  @IsArray()
  @Type(() => String)
  public types: string[];

  @ArrayMinSize(1)
  @IsNotEmpty()
  @IsArray()
  @Type(() => String)
  public areas: string[];

  @Max(999, { message: 'time must not be greater than 999 minutes' })
  @Min(1, { message: 'time must not be less than 1 minutes' })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  public time: number;

  @IsNotEmpty()
  @Type(() => Boolean)
  public isHot: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  public isComing: boolean;

  @IsNotEmpty()
  @Type(() => Boolean)
  public isClassic: boolean;

  @Type(() => String)
  public description?: string;

  @Type(() => String)
  public poster?: string;
}
