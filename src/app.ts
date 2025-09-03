import express, { Express, NextFunction, Request, Response } from 'express';
import { routes } from './routes/routes';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app: Express = express();

const fileLog = fs.createWriteStream(path.join(__dirname, 'storage', 'access.log'), { flags: 'a' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined', { stream: fileLog }));

// configuração das rotas
app.use(routes);

// Tratativa de erros da aplicação
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(400).json({
            msg: 'Ocorreu um erro!',
            error: err.message
        });
    }
});

export { app };
