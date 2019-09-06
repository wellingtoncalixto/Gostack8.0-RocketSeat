import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewere from './app/middleware/auth';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptController from './app/controllers/SubscriptController';

const uploads = multer(MulterConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddlewere);

routes.put('/user/update', UserController.update);

routes.post('/file', uploads.single('file'), FileController.store);

routes.post('/create/meetup', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetup/:id', MeetupController.update);
routes.delete('/meetup/:id', MeetupController.delete);

routes.post('/subscription', SubscriptController.store);
export default routes;
