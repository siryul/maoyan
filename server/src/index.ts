import { Movie } from './entities/movie';
import { validate } from 'class-validator';

const movie = new Movie();
validate(movie).then((err) => {
  console.log(err);
});
