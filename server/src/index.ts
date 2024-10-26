import 'reflect-metadata';
import { Movie } from './entities/movie';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

const m = {
  name: 'djakf',
  types: ['hjakfa'],
  areas: ['fahjkfas'],
  time: 3,
  isHot: false,
  isComing: false,
  isClassic: false,
};

let movie = plainToClass(Movie, m);

validate(movie).then((err) => {
  console.log(err);
});
