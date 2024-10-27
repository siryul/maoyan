export interface IMovie {
  id?: number;

  name: string;

  types: string[];

  areas: string[];

  time: number;

  isHot: boolean;

  isComing: boolean;

  isClassic: boolean;

  description: string;

  poster: string;
}

export interface ICondition {
  offset?: number;
  limit?: number;
  where?: Partial<IMovie>;
}

export interface IResponseError {
  error: string;
  data: null;
}

export interface IResponseData<T> {
  error: '';
  data: T;
}

export interface IResponsePageData<T> {
  error: '';
  total: number;
  data: T[];
}
