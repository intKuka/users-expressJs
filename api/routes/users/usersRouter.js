import { Router } from 'express';
import { default as users } from './users.js';
import { checkIntId, checkUserUpdateValues, userSchema } from '../../../helpers/validatiors.js';
import { checkSchema } from 'express-validator';

const usersRouter = Router();

usersRouter.get('/', users.getAll);

usersRouter.get('/:id', checkIntId(), users.getById);

usersRouter.post('/', checkSchema(userSchema, ['body']), users.postOne);

usersRouter.patch('/:id', [checkIntId(), checkUserUpdateValues()], users.patchById);

usersRouter.delete('/:id', users.deleteById);

export default usersRouter;