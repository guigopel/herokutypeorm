import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 45,
  })
  name: string;

  @Column({
    length: 45,
  })
  key: string;

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class;
}
