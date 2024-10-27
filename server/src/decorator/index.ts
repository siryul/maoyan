import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const IS_MOVIE_ENTITY = 'IS_MOVIE_ENTITY';

export function validateParam<T>(
  constructor: ClassConstructor<T>,
  skipMissingProperties = false
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const needConvertIndex: number[] =
      Reflect.getOwnMetadata(IS_MOVIE_ENTITY, target, propertyKey) || [];

    const originalMethed = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const validateRes: string[] = [];
      for (let index of needConvertIndex) {
        if (!(args[index] instanceof constructor)) {
          args[index] = plainToClass(constructor, args[index]);
        }
        const temp = await validate(args[index], { skipMissingProperties });
        temp.forEach((i) => {
          i.constraints && validateRes.push(...Object.values(i.constraints));
        });
      }
      if (validateRes.length > 0) {
        return validateRes;
      }
      return originalMethed.apply(this, args);
    };
    return descriptor;
  };
}

export function transform(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  const parametersIndex: number[] =
    Reflect.getOwnMetadata(IS_MOVIE_ENTITY, target, propertyKey) || [];
  parametersIndex.push(parameterIndex);
  Reflect.defineMetadata(IS_MOVIE_ENTITY, parametersIndex, target, propertyKey);
}
