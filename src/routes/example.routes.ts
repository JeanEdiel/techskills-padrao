import { Router } from 'express';
import { ExampleController } from '../controllers/example.controllers';

const exampleRoutes: Router = Router();

const exampleController = new ExampleController();

exampleRoutes.get('/hello-world', exampleController.helloWorld);
exampleRoutes.get('/test-error', exampleController.testError);

export { exampleRoutes };
