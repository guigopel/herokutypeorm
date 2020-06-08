import { EntityRepository, Repository } from 'typeorm';
import Lesson from '../models/Lesson';

@EntityRepository(Lesson)
export default class LessonRepository extends Repository<Lesson> {
  public async findByDescription(description: string): Promise<Lesson[]> {
    return this.find({
      where: {
        description,
      },
    });
  }
}
