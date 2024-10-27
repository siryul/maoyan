import 'reflect-metadata';
import 'dotenv/config';
import { db } from './db';
import Express from 'express';
import MovieRouter from './router/movie';
import UploadRouter from './router/upload';

db.initialize().then(() => {
  console.log('db connected!');
});

const app = Express();

app.use(Express.json());

app.use('/upload', Express.static('public/upload'));

app.use('/api/movie', MovieRouter);

app.use('/api/upload', UploadRouter);

app.listen(3000, () => {
  console.log('App listen http://localhost:3000');
});
