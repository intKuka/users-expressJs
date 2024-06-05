import { Router } from 'express';
import { default as users } from './users.js';

const usersRouter = Router();

usersRouter.get('/', users.getAll);

usersRouter.get('/:id', users.getById);

usersRouter.post('/', users.postOne);

usersRouter.patch('/:id', users.patchById);

usersRouter.delete('/:id', users.deleteById);

export default usersRouter;