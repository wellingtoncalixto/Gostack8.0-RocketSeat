import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ mensage: 'hello 1' }));

export default routes;
