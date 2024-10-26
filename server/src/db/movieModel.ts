import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json')
  types: string[];

  @Column('json')
  areas: string[];

  @Column()
  time: number;

  @Column()
  isHot: boolean;

  @Column()
  isComing: boolean;

  @Column()
  isClassic: boolean;

  @Column()
  description: string;

  @Column()
  poster: string;
}
