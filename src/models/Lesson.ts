import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import Content from './Content';
import Class from './Class';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('increment')
  idAula: number;

  @OneToOne(type => Content, lesson => Lesson)
  content: Content;

  @Column()
  description: string;

  @ManyToOne(type => Class, lessons => Lesson, { eager: true })
  classe: Class;
}
