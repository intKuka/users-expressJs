import { json, urlencoded, Router } from 'express';
import usersRouter from './routes/users/usersRouter.js';

const apiRouter = Router();

apiRouter.use(json());
apiRouter.use(urlencoded({ extended: false }));

apiRouter.use('/users', usersRouter);

// future possible categories...

export default apiRouter;

 


