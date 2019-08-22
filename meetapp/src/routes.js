import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewere from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddlewere);

routes.put('/user/update', UserController.update);

export default routes;
