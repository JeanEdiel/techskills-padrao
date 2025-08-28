import { Router } from 'express';
import { exampleRoutes } from './example.routes';

const routes: Router = Router();

routes.use(exampleRoutes);


export { routes };
