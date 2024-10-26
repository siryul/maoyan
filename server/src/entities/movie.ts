import { ArrayMinSize, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class Movie {
  @IsNotEmpty()
  public name: string;

  @ArrayMinSize(1)
  @IsNotEmpty()
  public types: string[];

  @ArrayMinSize(1)
  @IsNotEmpty()
  public areas: string[];

  @Max(999, { message: 'time must not be greater than 999 minutes' })
  @Min(1, { message: 'time must not be less than 1 minutes' })
  @IsInt()
  @IsNotEmpty()
  public time: number;

  @IsNotEmpty()
  public isHot: boolean;

  @IsNotEmpty()
  public isComing: boolean;

  @IsNotEmpty()
  public isClassic: boolean;

  public description?: string;

  public poster?: string;
}
