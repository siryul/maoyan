import 'reflect-metadata';
import 'dotenv/config';
import { db } from './db';

db.initialize().then(() => {
  console.log('connected');
});
