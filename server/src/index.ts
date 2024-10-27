import 'reflect-metadata';
import 'dotenv/config';
import { db } from './db';
import { Movie } from './entities/movie';
import { Movie as MovieServ } from './service/movie';

db.initialize().then(() => {
  console.log('connected');
  const movie: Movie = new Movie();
  movie.name = 'fsjkfd';
  movie.types = ['dajkf'];
  movie.areas = ['fsjkfs'];
  movie.time = 23;

  movie.name = 'liulangdiqiu';
  // MovieServ.add({
  //   name: 'ljfksla',
  //   types: ['fajkfs'],
  //   areas: ['fjklfs'],
  //   time: 32,
  // }).then((res) => {
  //   console.log(res);
  // });
  // MovieServ.update(1, {
  //   name: '流浪地球',
  // }).then((res) => {
  //   console.log(res);
  // });
  // MovieServ.delete(2).then((res) => {
  //   console.log(res);
  // });
  MovieServ.findById(1).then((res) => {
    console.log(res);
  });
});
