import dotenv from 'dotenv';

console.log('NODE_ENV', process.env.NODE_ENV);

dotenv.config({
    path: process.env.NODE_ENV != '' && process.env.NODE_ENV != undefined ? `.env.${process.env.NODE_ENV}` : '.env'
});

export const config = {
    app_name: process.env.APP_NAME,
    app_port: process.env.APP_PORT,
};
