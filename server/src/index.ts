import 'reflect-metadata';
import 'dotenv/config';
import { db } from './db';
import Express from 'express';
import MovieRouter from './router/movie';

db.initialize().then(() => {
  console.log('db connected!');
});

const app = Express();

app.use(Express.json());

app.use('/api/movie', MovieRouter);

app.listen(3000, () => {
  console.log('App listen http://localhost:3000');
});
