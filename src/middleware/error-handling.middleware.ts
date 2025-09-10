import { NextFunction, Request, Response } from 'express';

export function errorHandling(err: any, req: Request, res: Response, next: NextFunction) {
    if (err) {
        return res.status(400).json({
            msg: 'Ocorreu um erro!',
            error: err.message
        });
    }
    next();
};
