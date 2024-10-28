import type { IResponseError, IResponsePageData } from '../types/commonTypes';

export function isResponsePageData<T>(
  data: IResponseError | IResponsePageData<T>
): data is IResponsePageData<T> {
  return (data as IResponsePageData<T>).total !== undefined;
}
