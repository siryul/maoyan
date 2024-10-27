import type {
  ICondition,
  IMovie,
  IResponseData,
  IResponseError,
  IResponsePageData,
} from '../types/commonTypes';
import axios from 'axios';

type ResponseData = Promise<IResponseError | IResponseData<boolean>>;

export abstract class Movie {
  public static async add(m: IMovie): ResponseData {
    const { data } = await axios.post('/api/movie', m);
    return data;
  }

  public static async update(id: number, m: Partial<IMovie>): ResponseData {
    const { data } = await axios.put(`/api/movie/${id}`, m);
    return data;
  }

  public static async delete(id: number): ResponseData {
    const { data } = await axios.delete(`/api/movie/${id}`);
    return data;
  }

  public static async get(id: number): ResponseData {
    const { data } = await axios.get(`/api/movie/${id}`);
    return data;
  }

  public static async find(
    condition: ICondition = {}
  ): Promise<IResponsePageData<IMovie> | IResponseError> {
    const { data } = await axios.get('/api/movie', {
      params: condition,
    });
    return data;
  }
}
