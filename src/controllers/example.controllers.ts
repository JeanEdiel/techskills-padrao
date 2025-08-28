import { Request, Response } from 'express';

class ExampleController
{
    async helloWord(req: Request, res: Response)
    {
        return res.send('Hello Typescript');
    }
}

export { ExampleController };
