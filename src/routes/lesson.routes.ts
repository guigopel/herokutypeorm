/* eslint-disable consistent-return */
import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Lesson from '../models/Lesson';
import LessonRepository from '../repositories/LessonRepository';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('erro', err.message);
  }
});

lessonRouter.get('/', async (request, response) => {
  response.json(await getRepository(Lesson).find());
});

lessonRouter.get('/:description', async (request, response) => {
  const repository = getCustomRepository(LessonRepository);
  const res = await repository.findByDescription(request.params.description);
  return response.status(200).json(res);
});
export default lessonRouter;

// import { Router } from 'express';
// import { getRepository, getCustomRepository } from 'typeorm';
// import Class from '../models/Class';
// import ClassRepository from '../repositories/ClassRepository';

// const classRouter = Router();

// classRouter.post('/', async (request, response) => {
//   try {
//     const repo = getRepository(Class);
//     const res = await repo.save(request.body);
//     return response.status(201).json(res);
//   } catch (err) {
//     console.log('err.message :>> ', err.message);
//   }
// });

// classRouter.get('/', async (request, response) => {
//   response.json(await getRepository(Class).find());
// });

// classRouter.get('/:name', async (request, response) => {
//   const repository = getCustomRepository(ClassRepository);
//   const res = await repository.findByName(request.params.name);
//   response.json(res);
// });

// export default classRouter;
