import { Response } from 'express';
import type { IResult } from '../types';

export abstract class ResponseHelper {
  public static sendError(err: string[] | string, res: Response) {
    const error: string = Array.isArray(err) ? err.join(';') : err;

    res.send({ error, data: null });
  }

  public static sendData(data: any, res: Response) {
    res.send({ error: '', data });
  }

  public static sendPageData<T>(data: IResult<T>, res: Response) {
    res.send({
      error: '',
      total: data.total,
      data: data.data,
    });
  }
}
