import { Request, Response } from 'express';

class ExampleController
{
    async helloWorld(req: Request, res: Response)
    {
        return res.send('Hello Typescript');
    }

    testError(req: Request, res: Response)
    {
        throw new Error('Teste de erro.');
    }
}

export { ExampleController };
