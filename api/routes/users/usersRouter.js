import { Router } from 'express';
import { default as users } from './users.js';
import { checkIntId } from '../../../helpers/validatiors.js';

const usersRouter = Router();

usersRouter.get('/', users.getAll);

usersRouter.get('/:id', checkIntId(), users.getById);

usersRouter.post('/', users.postOne);

usersRouter.patch('/:id', users.patchById);

usersRouter.delete('/:id', users.deleteById);

export default usersRouter;